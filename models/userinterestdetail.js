'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInterestDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserInterestDetail.belongsTo(models.Interest, { foreignKey: { name: 'interestId' } })
      UserInterestDetail.belongsTo(models.User, { foreignKey: { name: 'userId' } })

    }
  }
  UserInterestDetail.init({
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        // User belongsTo ParentCategory 1:1
        model: "User",
        key: "id",
      },
    },
    interestId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        // User belongsTo ParentCategory 1:1
        model: "Interest",
        key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'UserInterestDetail',
  });
  return UserInterestDetail;
};