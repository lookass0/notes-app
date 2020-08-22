const express = require('express');
const Categories = require('../model/categories');
const router = express.Router();

router.get('/', async (req, res) => 
{
    const getAllCategories = await Categories.find();
    res.json(getAllCategories);
});

router.post('/', (req, res) =>
{
    res.setHeader('Content-Type', 'application/json');
    new Categories(
    {
        category_id: req.body.category_id,
        category_name: req.body.category_name
    })
    .save()
    .then(newCategoryResponse =>
    {
        res.json({status: true, ...newCategoryResponse._doc});
    })
    .catch(error =>
    {
        res.json({status: false, error: error});
    });
});
module.exports = router;