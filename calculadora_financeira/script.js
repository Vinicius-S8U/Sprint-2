function calcular() {
    var saca = 60.0
    var planta_cafe = 2.5
    var quantidade_saca = (Number(qnt_total_planta.value) * planta_cafe) / saca
    var perda_saca = quantidade_saca - Number(qnt_total_sacas.value)
    var estimativa_saca = quantidade_saca - (perda_saca / 2)
    var valor_ganho_atual = Number(qnt_total_sacas.value) * Number(preco_saca.value)
    var lucro = perda_saca * Number(preco_saca.value)
    var valor_final = valor_ganho_atual + lucro
    var estimativa_valor = valor_final - (lucro / 2)
    

    container_output.innerHTML = `Você produziu ${Number(qnt_total_sacas.value)} saca(s) e perdeu ${perda_saca} saca(s),
    tendo um ganho de R$${valor_ganho_atual}. Com o nosso serviço estima-se uma produção de ${quantidade_saca} 
    sacas e terá um ganho de R$${valor_final}! Você produziu <b style='color: #361E0B'><u>${Number(qnt_total_sacas.value)}</u></b> 
    saca(s) e perdeu <b class='output_perda'><u>${perda_saca}</u></b> saca(s),
    tendo um ganho de <b style='color: #361E0B'><u>${valor_ganho_atual.toLocaleString('pt-BR' ,{style: 'currency', currency: 'BRL'})}</u></b>.<br> Com o nosso serviço estima-se uma produção de 
    <b style='color: #2C9A0C'><u>${estimativa_saca}</u></b> sacas e terá
    um ganho total de <b style='color: #2C9A0C'><u>${estimativa_valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</u></b>!<br>
    Estima-se uma redução de <b style='color: #2C9A0C'><u>50%</u></b> na perda da sua produção em relação a variações climáticas!`
}