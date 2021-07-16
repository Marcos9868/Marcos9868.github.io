function cadastrar() { 
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let telefone = document.getElementById('telefone')

    let dados = JSON.parse(localStorage.getItem('dadosCadastro'))
    
    if (dados == null) {
        localStorage.setItem('dadosCadastro', '[]')
        dados = [];
    }

    const auxRegistro = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value
    }

    dados.push(auxRegistro);

    localStorage.setItem('dadosCadastro', JSON.stringify(dados));
    alert('Cadastro concluído com sucesso!')

    nome.value = "";
    email.value = "";
    telefone.value = "";
}