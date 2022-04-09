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


    container_output.innerHTML = `
    <div class="output_javascript"> 
        <div class="output_resultado">
            <h1> Resultado do cálculo</h1>
            <p>
                Você produziu ${Number(qnt_total_sacas.value)} saca(s) e perdeu ${perda_saca} saca(s),tendo um ganho de R$${valor_ganho_atual}. 
            </p>

            <p>
                Com o nosso serviço estima-se uma produção de ${quantidade_saca} sacas e terá um ganho de R$${valor_final}!
            </p>

            <p>
                Você produziu <span class="output_producao">${Number(qnt_total_sacas.value)}</span> saca(s) e perdeu 
                <span class='output_perda'>${perda_saca}</span> saca(s),tendo um ganho de <span class="output_ganho">
                ${valor_ganho_atual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>. 
            </p>
            
            <p>
                Com o nosso serviço estima-se uma produção de <span class="output_estimativa">${estimativa_saca}</span> 
                sacas e teráum ganho total de <span class="output_estimativa">
                <span>${estimativa_valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>!
            </p>
            <p>
                Estima-se uma redução de <span class="output_reducao">50%</span> na perda da sua produção em relação a variações climáticas!
            </p>
        </div>
    </div>`
}