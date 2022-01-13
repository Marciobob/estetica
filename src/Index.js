console.log('criar tabela 2')

obj = [
  {
  "servico":"massagem",
  "descricao":"massagem com oleo de canela",
  "valor":"$30,00"
},
  {
  "servico":"limpeza de pele",
  "descricao":"massagem com oleo de baleia",
  "valor":"$350,00"
}
]
function cria_input(data) {
  
  console.log('criar input categoria')
  
  const divpostos = document.getElementById("tabe")
    
    for (var i = 0; i < data.length; i++) {
      var servico = data[i].servico
      var descricao = data[i].descricao
      var valor = data[i].valor
        
      console.log(servico,descricao,valor,divpostos)
      
      let tr = divpostos.insertRow();
      
      let td_servico = tr.insertCell();
      let td_descricao = tr.insertCell();
      let td_valor = tr.insertCell();
      
      td_servico.innerText = servico
      td_descricao.innerText = descricao
      td_valor.innerText = valor

      td_servico.classList.add("txt_lista")
      
      td_descricao.classList.add("txt_lista")
      
      td_valor.classList.add("txt_lista")
  
    }
  
}

function reloads(argument) {
  window.location.reload()
  return
}

window.addEventListener("load", cria_input(obj));

