const router = require('express').Router()
const { Cat } = require('../models')

// GET all cat
router.get('/cat', async function (req, res) {
  const cat = await Cat.find({})
  res.json(cat)
})

// GET one cat by id
router.get('/cat/:id', async function (req, res) {
  const cat = await Cat.findById(req.params.id)
  res.json(cat)
})

// POST one cat
router.post('/cat', async function (req, res) {
  const cat = await Catat.create(req.body)
  res.json(cat)
})

// PUT one cat by id
router.put('/cat/:id', async function (req, res) {
  await Cat.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one cat by id
router.delete('/cat/:id', async function (req, res) {
  await Cat.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
