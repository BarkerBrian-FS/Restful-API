'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products','slug', {
      type: Sequelize.STRING
    }),
    await queryInterface.addColumn('Products','description', {
      type: Sequelize.TEXT('long')
    }),
    await queryInterface.addColumn('Products','is_published', {
      type: Sequelize.BOOLEAN
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
