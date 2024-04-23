
// Importe a função criarNovoProduto do módulo correspondente
import { criarNovoProduto } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const formNovoProduto = document.getElementById('formNovoProduto');

    formNovoProduto.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nomeProduto = document.querySelector('#formNovoProduto input[name="nome"]').value;
        const valorProduto = parseFloat(document.querySelector('#formNovoProduto input[name="valor"]').value);
        const imagemProduto = document.querySelector('#formNovoProduto input[name="imagem"]').value;

        try {
            // Chame a função criarNovoProduto para enviar os dados para a API fake
            await criarNovoProduto(nomeProduto, valorProduto, imagemProduto);

            // Após enviar com sucesso, você pode fazer algo, como limpar o formulário ou atualizar a lista de produtos
            formNovoProduto.reset();
        } catch (error) {
            console.error('Erro ao criar novo produto:', error.message);
        }
    });
});
