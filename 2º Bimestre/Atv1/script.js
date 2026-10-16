
const botao = document.getElementById("btnCarregar");
const areaProdutos = document.getElementById("produtos");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", async function() {
    mensagem.textContent = "Carregando produtos...";
    areaProdutos.innerHTML = "";

    try {
        const response = await fetch("https://dummyjson.com/products?limit=12");

        if (!response.ok) {
            throw new Error("Erro ao carregar produtos");
        }

        const dados = await response.json();

        dados.products.forEach(function(produto) {
            const card = document.createElement("div");

            card.innerHTML = `
                <img src="${produto.thumbnail}" alt="${produto.title}" width="100">
                <h2>${produto.title}</h2>
                <p>Preço: ${produto.price}</p>
                <p>Categoria: ${produto.category}</p>
            `;

            areaProdutos.appendChild(card);
        });

        mensagem.textContent = "Produtos carregados!";

    } catch (erro) {
        mensagem.textContent = "Erro ao carregar os produtos. Tente novamente.";
        console.error(erro);
    }
});
