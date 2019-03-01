const app = require('../../app')
const indexController = require('../controllers/indexController')
const chatController = require('../controllers/chatController')

module.exports = function(app){
  app.get('/', function(req,res){
    indexController(app, req, res)
  })

  app.get('/chat', function(req,res){
    chatController.iniciaChat(app,req,res)
  })

  app.post('/chat', function(req, res){
    chatController.iniciaChat(app, req, res)
  })
  
}
