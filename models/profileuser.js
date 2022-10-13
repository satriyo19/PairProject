'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProfileUser.belongsTo(models.User)
    }
  }
  ProfileUser.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: 'Nama depan harus'}
  }},
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: 'Nama belakang harus diisi'}
  }},
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: 'Lokasi harus diisi'}
  }},
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: 'Nomor wajib diisi'}
  }},
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfileUser',
  });
  return ProfileUser;
};