function calcular() {
    var peso_saca = 60.0
    var producao_cafeeiro = 2.5
    var preco = Number(input_preco_saca.value)
    var cafeeiros = Number(input_qnt_cafeeiro.value)
    var sacas = Number(input_qnt_sacas.value)
    
    var quantidade_saca = (cafeeiros * producao_cafeeiro) / peso_saca
    var perda_saca = quantidade_saca - sacas
    var estimativa_saca = quantidade_saca - (perda_saca / 2)
    var valor_ganho_atual = sacas * preco
    var lucro = perda_saca * preco
    var valor_final = valor_ganho_atual + lucro
    var estimativa_valor = valor_final - (lucro / 2)


    container_output.innerHTML = `
    <div class="output_javascript"> 
        <div class="output_resultado">
            <h1 class="titulo_js"> Resultado do cálculo</h1>
            <ul class="list_js_01">
                <li>Você possui ${cafeeiros} cafeeiros;</li>
                <li>Produziu ${sacas} sacas;</li>
                <li>E vende cada unidade por ${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })};</li>
            </ul>
        
            <ul class="list_js_02">
                <li>
                    Você produziu <span class="output_producao">${sacas}</span> saca(s) mas perdeu 
                    <span class='output_perda'>${perda_saca}</span> saca(s), ganhando apenas <span class="output_ganho">
                    ${valor_ganho_atual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>. 
                </li>
                <li>
                    Com o nosso serviço estima-se uma produção de <span class="output_estimativa">${estimativa_saca}</span> 
                    sacas e terá um ganho total de <span class="output_estimativa">
                    <span>${estimativa_valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>.
                    </li>
                <li>
                    Contratando o nosso serviço é possivel reduzir essa perda na produção em até <span class="output_reducao">50%</span>.
                </li>
            </ul>
            <button onclick="recomecar()" class="btn_js_simulador">Recomeçar</button>
        </div>
    </div>`
}

function recomecar() {
    window.location = "simulador.html"
}
