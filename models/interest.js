'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Interest.hasMany(models.UserInterestDetail, { foreignKey: { name: 'interestId' } })

    }
  }
  Interest.init({
    interest: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Interest',
  });
  return Interest;
};