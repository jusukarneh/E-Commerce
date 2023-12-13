const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'christian music',
  },
  {
    tag_name: 'afro music',
  },
  {
    tag_name: 'orange',
  },
  {
    tag_name: 'grey',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: ' r&b culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
