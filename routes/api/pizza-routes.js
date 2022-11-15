// Alternate Routes Setup
// *Pros: easier-to-read code
// *Cons: tracking more file import/export
const router = require('express').Router();

// functionality import statement for routes
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/pizza-controller');

// /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;