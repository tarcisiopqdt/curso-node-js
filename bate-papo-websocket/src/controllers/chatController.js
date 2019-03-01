module.exports.iniciaChat = function(app, req, res){
  const dadosForm  = req.body

  req.assert('apelido','Você deve digitar um apelido').notEmpty();
  req.assert('apelido', 'Nome ou apelido deve conter no mínimo 3 e no máximo 30 letras').len(3,30);
  const erros = req.validationErrors();
  console.log('erros? ' + erros)
  if(erros){
    res.render('chat', {validacao: erros})
    return;
  }
  res.render('chat')
}
