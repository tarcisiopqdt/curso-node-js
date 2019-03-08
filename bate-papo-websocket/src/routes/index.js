const indexController = require('../controllers/indexController')
const chatController = require('../controllers/chatController')

module.exports = function(application){

  application.get('/', function(req,res){
    indexController(application, req, res)
  })

  application.get('/chat', function(req,res){
    chatController.iniciaChat(application,req,res)
  })

  application.post('/chat', function(req, res){
    console.log("reqbody: " + req.body) // retorna [object Object]
    chatController.iniciaChat(application, req,res)

  })
  
}
