'use strict';
const {
  Model
} = require('sequelize');


let bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance) => {
    let salt = bcrypt.genSaltSync(6);
    let hash = bcrypt.hashSync(instance.password, salt);
    // console.log(hash)

    instance.password = hash
  })
  return User;
};