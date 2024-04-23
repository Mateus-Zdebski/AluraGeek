
// Função para criar um novo produto no servidor JSON
export async function criarNovoProduto(nome, valor, imagem) {
    const url = 'http://localhost:3000/produtos'; // Substitua pela URL correta da sua API fake

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                imagem: imagem,
            }),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar novo produto.');
        }

        const novoProduto = await response.json();
        console.log('Novo produto criado:', novoProduto);
    } catch (error) {
        throw new Error(error.message);
    }
}
