'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Books', [
    {
      title: 'The Martian',
      author: 'Andy Weir',
      releaseDate: new Date('2014-02-11'),
      pageCount: 384,
      publisher: 'Crown',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ready Player One',
      author: 'Ernest Cline',
      releaseDate: new Date('2011-08-16'),
      pageCount: 384,
      publisher: 'Crown',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      releaseDate: new Date('1998-10-01'),
      pageCount: 309,
      publisher: 'Scholastic Press',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Books', null, {});
  }
};
