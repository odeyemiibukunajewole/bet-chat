'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserInterestDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "Users",
          key: "id",
        },
      },
      interestId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "Interests",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserInterestDetails');
  }
};