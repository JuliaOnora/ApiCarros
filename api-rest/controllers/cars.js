const Car = require("../dao/car");


exports.newCar = (req, res) => {
	Car.create(req.body, (err) => {
		if (!err) {
			res.status(201).send(req.body);
		}
		else {
			res.status(400).send({ msg: "Can not register a new car" });
		}
	}
	);
};

exports.getCars = (req, res) => {
	const info = req.query;

	if (info.brand) {
		Car.findOneBrand(info.brand, (err, data) => {
			if (data) {
				res.status(200).send(data);
			}
			else {
				res.status(404).send({ msg: "Can not get the car" });
			}
		});
	} else {
		Car.findAll((err, data) => {
			if (err) {
				res.status(404).send({ msg: "Can not get cars" });
			}
			res.status(200).send(data);
		});
	}


};



exports.getaCarId = (req, res) => {
	Car.findOneId(req.params.id, (err, data) => {
		if (data) {
			res.status(200).send(data);
		}
		else {
			res.status(404).send({ msg: "Can not get the car" });
		}
	});
};


exports.upCar = (req, res) => {
	Car.changeOne(req.params.id, req.body, (err) => {
		if (err) {
			res.status(400).send({ msg: err });
			console.log(err);
		}
		else {
			res.status(204).end();
		}
	});
};

exports.delCar = (req, res) => {
	Car.deleteOnore(req.params.id, (err) => {
		if (!err) {
			res.status(204).end();
		}
	});
};