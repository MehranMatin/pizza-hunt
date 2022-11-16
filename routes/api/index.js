const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// add prefix to routes created in /api/*
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;