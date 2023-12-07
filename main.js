
function adicionarContato() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        var tabela = document.getElementById('tabelaContatos');
        var linha = tabela.insertRow(-1);
        var celulaNome = linha.insertCell(0);
        var celulaTelefone = linha.insertCell(1);

        celulaNome.innerHTML = nome;
        celulaTelefone.innerHTML = telefone;

        // Limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}





