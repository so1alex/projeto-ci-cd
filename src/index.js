// --- Lógica Principal: Função de Soma ---
// Esta é a função que seu teste Jest cobre
function soma(a, b) {
    // Garantir que os inputs são tratados como números
    const numA = Number(a);
    const numB = Number(b);

    // Se a conversão for bem-sucedida, retorna a soma
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA + numB;
    }

    // Se os inputs não forem números válidos, retorna NaN ou um erro
    return NaN;
}

// --- Handler de API (Formato obrigatório pela Vercel) ---
// O módulo deve exportar uma função que recebe os objetos request (req) e response (res).
module.exports = (req, res) => {
    // 1. Extrair Parâmetros da Query String (URL: ?a=X&b=Y)
    const { a, b } = req.query;

    // 2. Definir o Header de resposta como JSON
    res.setHeader('Content-Type', 'application/json');

    if (a === undefined || b === undefined) {
        // Retorna instruções se os parâmetros não forem fornecidos
        res.statusCode = 200;
        return res.end(JSON.stringify({
            status: 'ok',
            resultado: 'API rodando. Adicione os parâmetros ?a=X&b=Y para calcular a soma.'
        }));
    }

    // 3. Chamar a função de soma
    const resultadoSoma = soma(a, b);

    // 4. Retornar o resultado
    if (!isNaN(resultadoSoma)) {
        res.statusCode = 200;
        return res.end(JSON.stringify({
            status: 'success',
            a: Number(a),
            b: Number(b),
            resultado: resultadoSoma
        }));
    } else {
        // Tratar erro de input
        res.statusCode = 400;
        return res.end(JSON.stringify({
            status: 'error',
            message: 'Parâmetros "a" e "b" devem ser números válidos.'
        }));
    }
};