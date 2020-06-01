## Comandos do Projeto OmniStack ##
sudo su <root>
mkdir <nome da nova pasta>
npm init -y
npm install express
node index.js <inicialização do backend e banco para o localhost e suas rotas>
npx create-react-app <nome da app>
npm start
npm install nodemon -D <framework para restart de banco de dados on-line>
npm install knex <gerenciador de banco de dados>
npm install sqlite3 <banco de dados utilizado>
npx knex init
npx knex migrate:make <nome da create_ongs>
npx knex migrate:make create_incidents
npx knex migrate:latest <executa a criação da table>
npx knex migrate:rollback <desfaz o ultimo migrate ou criação>
npx knex migrate:list <lista as ultimas execuções ou criações>



## Nono ##

mvn quarkus:dev
mvn clean package
mvn clean package -DskipTests
mvn compile quarkus:dev


