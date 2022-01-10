const router = require('express').Router()
const { Bird, Owner } = require('../models')

// GET all bird
router.get('/bird', async function (req, res) {
  const bird = await Bird.find({}).populate('user')
  res.json(bird)
})

// GET one bird by id
router.get('/bird/:id', async function (req, res) {
  const bird = await Bird.findById(req.params.id).populate('user')
  res.json(bird)
})

// POST one bird
router.post('/bird', async function (req, res) {
  const bird = await Bird.create(req.body.user, {$push: {bird: bird_id} })
  res.json(bird)
})

// PUT one bird by id
router.put('/bird/:id', async function (req, res) {
  await Bird.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one bird by id
router.delete('/bird/:id', async function (req, res) {
  await Bird.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router


