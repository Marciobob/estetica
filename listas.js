console.log('criar tabela 2')

obj = [
  {
  "servico":"Massagem",
  "descricao":"pedras quente",
  "valor":"$250,00"
  },
  {
  "servico":"Massagem",
  "descricao":"relaxante",
  "valor":"$180,00"
  },

  {
  "servico":"Massagem",
  "descricao":"drenagem redutora",
  "valor":"$220,00"
  }
]


obj2 = [
  {
  "servico":"Manicure",
  "descricao":"Pé e mão",
  "valor":"$150,00"
  },
  {
  "servico":"Manicure",
  "descricao":"Somente mãos",
  "valor":"$75,00"
  },
  {
  "servico":"Manicure",
  "descricao":"Somente pé",
  "valor":"$90,00"
  },
  {
  "servico":"Estética",
  "descricao":"Sobrancelha",
  "valor":"$50,00"
  },
  {
  "servico":"Depilação",
  "descricao":"virilha",
  "valor":"$70,00"
  },
  {
    "servico":"Depilação",
    "descricao":"intima",
    "valor":"$50,00"
  },
  {
    "servico":"Depilação",
    "descricao":"braços",
    "valor":"$35,00"
  },
  {
    "servico":"Depilação",
    "descricao":"meia perna",
    "valor":"$50,00"
  },
  {
    "servico":"Depilação",
    "descricao":"coxas",
    "valor":"$60,00"
  },
  {
    "servico":"Depilação",
    "descricao":"buço",
    "valor":"$25,00"
  },{
    "servico":"Depilação",
    "descricao":"axila",
    "valor":"$35,00"
  },
 

]
function cria_input(data,data2) {
  
  console.log('criar input categoria')
  
  const divpostos = document.getElementById("tabe")
  const divlista = document.getElementById("tabel")

    
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

    for (var i = 0; i < data2.length; i++) {
      var servico = data2[i].servico
      var descricao = data2[i].descricao
      var valor = data2[i].valor
        
      console.log(servico,descricao,valor,divlista)
      
      let tr = divlista.insertRow();
      
      let td_servico = tr.insertCell();
      let td_descricao = tr.insertCell();
      let td_valor = tr.insertCell();
      
      td_servico.innerText = servico
      td_descricao.innerText = descricao
      td_valor.innerText = valor

      td_servico.classList.add("txt_lista3")
      
      td_descricao.classList.add("txt_lista3")
      
      td_valor.classList.add("txt_lista3")
  
    }
  
}

function reloads(argument) {
  window.location.reload()
  return
}

window.addEventListener("load", cria_input(obj,obj2));

