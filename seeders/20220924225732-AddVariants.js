'use strict';

// Reusable Description
const description = "Special Shelob's choice acorn dared therein. What about second breakfast? Hook lordly Gollum's there'd arrangements? Wood peril Dwarves dragons birds summoning fighters dragon dirty grumpy amuse grocer. Straight bars consequence drawn withering fountains Muil twiddle sleepies relief developed they'll. Emptiness tweens times list Cirith gems law nighttime everything tools! Real Lake-men never. Skulking shakes voice Ring-bearer stained?"
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'White', slug: 'white', description, price: 89.78, productId: 1, inventory: 2, createdAt, updatedAt  },
      { id: 2, title: 'Red', slug: 'red', description, price: 89.78, productId: 1, inventory: 24, createdAt, updatedAt  },
      { id: 3, title: 'White', slug: 'white', description, price: 89.78, productId: 2, inventory: 0, createdAt, updatedAt  },
      { id: 4, title: 'Red', slug: 'red', description, price: 89.78, productId: 2, inventory: 10, createdAt, updatedAt  }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};
