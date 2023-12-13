const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Studio',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Speaker',
  },
  {
    category_name: 'Joggers',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;