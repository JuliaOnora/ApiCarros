# API Carros - Júlia Onora

API-Rest e front-end simplificado.
A página inicial do front-end abre com a seguinte rota:
````
/
````

São retornados os carros cadastrados no banco de dados  realizando um `GET` na rota a seguir:
````
/cars
````

Novos carros são cadastrados no banco de dados  realizando um `POST` na rota:
````
/new
````

Carros de uma marca específica são acessados ao realizar um `GET` e passando como parâmetro na requisição o nome da marca, utilizando padrão `Query Parameters` e `encoding URI` de codificação. Recurso disponível apenas no back-end. Um exemplo de acesso com o carro da marca "Honda Civic":
````
/cars?brand=Honda%20Civic
````

 Back-end implementado utilizando o SQLite como banco de dados. Extensão Thunder Cliente do Node.js utilizada como recurso auxiliar.



## API Rest
Instale as dependências. Acesse as pastas `api-rest` e `cars-front` separadamente. No terminal, digite:

````
npm install
````

Abra o servidor do back-end, no respectivo terminal. Digite: 
````
npm run dev
````

## Front-end
Divida o terminal para abrir o servidor do front-end. Por padrão, a porta de comunicação para requisições do tipo http no navegador é a de número 80. Se este valor não for especificado, o servidor do front-end abrirá na porta 3000. No terminal recém separado, digite:
````
PORT=80 npm start
````