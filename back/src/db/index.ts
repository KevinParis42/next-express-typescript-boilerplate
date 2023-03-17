import { Sequelize } from 'sequelize-typescript';
import fs from 'fs'
import path from 'path';

const sequelize = new Sequelize(
    {
        "username": "username",
        "password": "password",
        "database": "db_name",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "logging": false,
    }
)


const basename = path.basename(__filename);

fs
  .readdirSync(__dirname + '/models')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    console.log(path.join(__dirname + '/models', file))
    sequelize.addModels([path.join(__dirname + '/models', file)])
  });

console.log(sequelize.models)

export default sequelize
