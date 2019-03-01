const app = require('./config/server')
const routes = require('./src/routes/index');
routes(app);

app.listen(3000, function(){
  console.log("Server Online in http://localhost:3000")
})
