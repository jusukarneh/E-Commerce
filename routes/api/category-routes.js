const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://localhost:3001/api/catogories
//GET - READ
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});




router.get('/:id', async (req, res) => {
  
  try {
    const id = req.params.id
    const categoryData = await Category.findByPk(id,{
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});


router.post('/', async (req, res) => {
 
  try {

    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});



router.put('/:id', async (req, res) => {
 
  try {

    const categoryData = await Category.update(req.body,{
      where: {
        id: req.params.id
      }
    })
      res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});



router.delete('/:id', async (req, res) => {
  
  try {

    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
