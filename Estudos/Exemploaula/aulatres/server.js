const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORTA = 3000;

const produtos = [
    { id: 1, nome: "Teclado", preco: 128.00 },
    { id: 2, nome: "Mouse", preco: 79.00 },
    { id: 3, nome: "Monitor", preco: 300.00 }
];

app.get('/api/produtos', (req, res) => {
    res.status(200).json(produtos);
});

app.post('/api/produtos', (req, res) => {
    const novoProduto = {
        id: produtos.length > 0
            ? Math.max(...produtos.map(produto => produto.id)) + 1
            : 1,
        nome: req.body.nome,
        preco: req.body.preco
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.get('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(produto => produto.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }
    res.status(200).json(produto);
});

app.put('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(produto => produto.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.status(200).json(produto);
});

app.delete('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    produtos.splice(indice, 1);

    res.status(200).json({
        mensagem: 'Produto excluído com sucesso'
    });
});

app.listen(PORTA, () => {
    console.log(`Servidor escutando na porta ${PORTA}`);
});