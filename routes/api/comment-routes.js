const router = require('express').Router();
// functionality import statement for routes
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

// /api/comment/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comment/<pizzaId>/<commentId>
router
  // the callback function of a route method has req and res as parameters ...
  .route('/:pizzaId/:commentId')
  // ... so we don't have to explicitly pass any arguments to addReply
  .put(addReply)
  .delete(removeComment);

router.route('/:pizzaId/:commentID/:replyId').delete(removeReply);

module.exports = router;