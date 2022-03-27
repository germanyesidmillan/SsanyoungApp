--migraciones
npx sequelize db:migrate

npx sequelize model:generate --name Car --attributes name:String 
npx sequelize model:generate --name Department --attributes name:String 
npx sequelize model:generate --name Citie --attributes name:String,dpartmentsid:Integer  
npx sequelize model:generate --name Client --attributes name:String,email:String,phone:Integer,carid:integer,cityid:Integer  

--seeder
npx sequelize seed:generate --name Department


--crear datos
npx sequelize db:seed:all 
npx sequelize db:seed --seed  20220325221208-city
npx sequelize db:seed --seed  20220326094653-client

