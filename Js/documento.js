
// Importe a função excluirProduto do módulo correspondente
import { excluirProduto } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    // Adicione um event listener nos cards de produto para capturar o clique no ícone de exclusão
    document.querySelectorAll('.delete-icon').forEach((deleteIcon) => {
        deleteIcon.addEventListener('click', async () => {
            const card = deleteIcon.closest('.card');
            const productId = card.dataset.id; // Supondo que você tenha um data-id no card com o ID do produto

            try {
                // Chame a função excluirProduto para enviar a solicitação DELETE para o servidor
                await excluirProduto(productId);

                // Após excluir com sucesso, você pode fazer algo, como remover o card da interface
                card.remove();
            } catch (error) {
                console.error('Erro ao excluir produto:', error.message);
            }
        });
    });
});
