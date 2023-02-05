const { ulid } = require("ulid");
const db = require("../infra/connection"); 
// Info db -> Nome: auto.db - tabela: cars

class Car {
	create(data, callback) {
		const { brand, yearModel, category, color, value } = data;

		const sql = `INSERT INTO cars ( id, brand, yearModel, category, color, value )
					VALUES ( '${ulid()}', '${brand}', '${yearModel}', '${category}', '${color}', '${value}' )`;
    
		db.run(sql, callback);
	}


	findAll(callback){
		const sql = "SELECT * FROM cars";
		db.all(sql, callback);
	}


	findOneId(id, callback){
		const sql = `SELECT * FROM cars WHERE id = '${id}'`;
		db.get(sql, callback);
	}

	findOneBrand(brand, callback){
		const decBrand = (decodeURIComponent(brand));
		const sql = `SELECT * FROM cars WHERE brand = '${decBrand}'`;
		db.all(sql, callback);
	}


	changeOne(id, data, callback){
		let carData = Object.entries(data);
		let fields = [];

		for (let i = 0; i < carData.length; i++){
			fields.push(`${carData[i][0]} = '${carData[i][1]}'`);
		}

		
		const sql = `UPDATE cars SET ${fields.join(",")} WHERE id = '${id}'`;

		db.run(sql, callback);
	}


	deleteOnore(id, callback){
		const sql = `DELETE FROM cars WHERE id = '${id}'`;
		db.run(sql, callback);
	}
}

module.exports = new Car();