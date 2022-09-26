const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
  LembreteCriado: (lembrete) => {
    //lembrete = {contador: 1, texto: "Fazer café"}
    baseConsulta[lembrete.contador] = lembrete    
  },
  ObservacaoCriada: (observacao) => {
    //observacao = {id: '123456', texto: "abc", lembreteId: 1}
    const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
    observacoes.push(observacao)
    baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
  }
}

/* const funcoes = {
  tipoEvento: () => {},
  LembreteCriado: (lembrete) => {},
  ObservacaoCriada: (observado) => {}
}
const operacoes = {
  soma: (a, b) => a + b
}
const res = operacoes.soma(2, 3)
*/

//localhost:6000/lembretes
app.get('/lembretes', (req, res) => {

})
//localhost:6000/eventos
app.post('/eventos', (req, res) => {

})

app.listen(6000, () => console.log("Consultas. Porta 6000."))


