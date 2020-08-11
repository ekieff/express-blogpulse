var db = require('./models')

db.comment.create({
  name: 'Felipe Lerner',
  content: 'So great to see this investment paying off!',
  articleid: 1
})
.then(function(comment) {
  console.log(comment.get())
})