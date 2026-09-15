export async function buscarPersonagens() {
    try {
        const resposta = await api.get('/characters');
        return resposta.data;
    } catch (error) {
        throw error;
    }
}