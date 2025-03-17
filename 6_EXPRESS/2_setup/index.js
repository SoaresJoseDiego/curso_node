const express = require('express')
const app = express()
const port = 3000; // variavel de ambiente

app.get('/', (req, res) => {
    res.send('Hello World! Diego')
})

app.listen(port, () => {
    console.log(`Sistema rodando na porta ${port}`);
    
})