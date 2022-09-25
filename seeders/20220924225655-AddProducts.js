'use strict';

// Reusable Description
const description = `Special Shelob's choice acorn dared therein. What about second breakfast? Hook lordly Gollum's there'd arrangements? Wood peril Dwarves dragons birds summoning fighters dragon dirty grumpy amuse grocer. Straight bars consequence drawn withering fountains Muil twiddle sleepies relief developed they'll. Emptiness tweens times list Cirith gems law nighttime everything tools! Real Lake-men never. Skulking shakes voice Ring-bearer stained?`
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Nike Womens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        isPublished: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Nike Mens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        isPublished: true,
        description, createdAt, updatedAt
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};
