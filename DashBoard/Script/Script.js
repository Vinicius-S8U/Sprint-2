
/* <!--  funções do site (botões etc) --> */

function userFunction(){

MenuUserI = document.getElementById("menuUser")

if(MenuUserI.style.display == "none"){
    MenuUserI.style.display = "block"
}
else{
    MenuUserI.style.display = "none"  
}
}

function menuFunction(){

menuFunc = document.getElementById("Funcionalidade")

if(menuFunc.style.display == "none"){
    menuFunc.style.display = "block"
}
else{
    menuFunc.style.display = "none"  
}
}

/* função dos selects de mudar o valor da span do relatorio  */

function select_relatorio(){
var valor_select_relatorio_alerta = document.getElementById("select_dashD").value 

if(valor_select_relatorio_alerta == "Semana"){
  qtd_alertas.innerHTML= `Você teve 35 alertas pertinentes`
  alerta1.innerHTML = `Você teve 10 alerta às 12:00 esta semana`
  alerta2.innerHTML = `Você teve 5 alerta às 02:00 esta semana`
  alerta3.innerHTML = `Você teve 8 alerta às 01:00 esta semana`
  alerta4.innerHTML = `Você teve 6 alerta às 04:00 esta semana`
  alerta5.innerHTML = `Você teve 6 outros alertas esta semana`
}
else if (valor_select_relatorio_alerta == "mes"){
  qtd_alertas.innerHTML= `Você teve 145 alertas pertinentes`
  alerta1.innerHTML = `Você teve 40 alerta às 12:00 este Mês`
  alerta2.innerHTML = `Você teve 25 alerta às 02:00 este Mês`
  alerta3.innerHTML = `Você teve 16 alerta às 01:00 este Mês`
  alerta4.innerHTML = `Você teve 24 alerta às 04:00 este Mês`
  alerta5.innerHTML = `Você teve 40 outros alerta este Mês`
 }

else{
  qtd_alertas.innerHTML= `Você teve 18 alertas pertinentes`
  alerta1.innerHTML = `Você teve 6 alerta às 12:00`
  alerta2.innerHTML = `Você teve 2 alerta às 02:00`
  alerta3.innerHTML = `Você teve 4 alerta às 01:00`
    alerta4.innerHTML = `Você teve 2 alerta às 04:00`
  alerta5.innerHTML = `Você teve 4 outros alerta`
}

if(valor_select_relatorio_alerta == "Semana"){
  Temp_min.innerHTML = `<p>Temperatura Minima da Semana :5.3</p>`
  Temp_med.innerHTML = `<p>Temperatura Média da Semana :18.8</p>`
  Temp_max.innerHTML = `<p>Temperatura Máxima da Semana :34.3</p>`

  Umid_min.innerHTML = `<p>Umidade Minima do Semana :33.9</p>`
  Umid_med.innerHTML = `<p>Umidade Média do Semana :65.9</p>`
  Umid_max.innerHTML = `<p>Umidade Máxima do Semana :80.2</p>`
}
else if(valor_select_relatorio_alerta == "mes"){
  Temp_min.innerHTML = `<p>Temperatura Minima da Mês :5.3</p>`
  Temp_med.innerHTML = `<p>Temperatura Média da Mês :16.4</p>`
  Temp_max.innerHTML = `<p>Temperatura Máxima da Mês : 35.1</p>`

  Umid_min.innerHTML = `<p>Umidade Minima do Mês :30.1</p>`
  Umid_med.innerHTML = `<p>Umidade Média do Mês :62.9</p>`
  Umid_max.innerHTML = `<p>Umidade Máxima do Mês :83.2</p>`

}
else{
  Temp_min.innerHTML = `<p>Temperatura Minima do Dia :12.2</p>`
  Temp_med.innerHTML = `<p>Temperatura Média do Dia :22.2</p>`
  Temp_max.innerHTML = `<p>Temperatura Máxima do Dia :30.0</p>`

  Umid_min.innerHTML = `<p>Umidade Minima do Dia :60.3</p>`
  Umid_med.innerHTML = `<p>Umidade Média do Dia :75.0</p>`
  Umid_max.innerHTML = `<p>Umidade Máxima do Dia :80.2</p>`
}

}

