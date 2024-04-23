if (typeof window !== 'undefined') {
    // Código que depende do objeto document
    document.addEventListener('DOMContentLoaded', () => {
        const formNovoProduto = document.getElementById('formNovoProduto');
        formNovoProduto.addEventListener('submit', async (event) => {
            event.preventDefault();

            const nome = document.getElementById('nomeProduto').value;
            const valor = parseFloat(document.getElementById('valorProduto').value);
            const imagem = document.getElementById('imagemProduto').value;

            try {
                await criarNovoProduto(nome, valor, imagem);
                // Atualizar a lista de produtos após adicionar o novo produto
                listarProdutos();
                // Limpar os campos do formulário após adicionar o novo produto
                formNovoProduto.reset();
            } catch (error) {
                console.error('Erro ao criar novo produto:', error.message);
            }
        });
    });
}
