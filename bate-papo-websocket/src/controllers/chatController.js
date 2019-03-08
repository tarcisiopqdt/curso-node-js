module.exports.iniciaChat = function(app, req, res){
  
  const dadosForm  = req.body; 
  console.log('req.body no controller ' + dadosForm) //retorna[object Object]
  
  req.assert('apelido','Você deve digitar um apelido').notEmpty();
  req.assert('apelido', 'Nome ou apelido deve conter no mínimo 3 e no máximo 30 letras').len(3,30);
  const erros = req.validationErrors()
  if(erros){
    res.render('chat', {validacao: erros})
    return
  }else{
    res.render('chat')
  }

}
