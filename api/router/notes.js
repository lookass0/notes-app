const express = require('express');
const Notes = require('../model/notes');
const router = express.Router();

router.get('/:categoryID', async (req, res) =>
{
    const getAllNotesForCategory = await Notes.find().where('category_id', req.params.categoryID);
    res.json(getAllNotesForCategory);
});
router.post('/', (req, res) =>
{
    res.setHeader('Content-Type', 'application/json');
    new Notes(
    {
        category_id: req.body.category_id,
        note_title: req.body.note_title,
        note_content: req.body.note_content
    })
    .save()
    .then(postedNoteResponse =>
    {
        res.json({status: true, ...postedNoteResponse._doc});
        console.log('done');
    })
    .catch(error =>
    {
        res.json({status: false, error: error});
    });
});
module.exports = router;