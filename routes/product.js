const { Router } = require('express')
const router = Router()
const productControllers = require('../controllers/product')

// Create a new Product
router.post('/', productControllers.create)

// Retrieve all productControllers
router.get('/', productControllers.findAll)

// Retrieve a single Product with id
router.get('/:id', productControllers.findOne)

// Update a Product with id
router.put('/:id', productControllers.update)

// Delete a Product with id
router.delete('/:id', productControllers.delete)

// Create a new Product
router.delete('/', productControllers.deleteAll)

module.exports = router
