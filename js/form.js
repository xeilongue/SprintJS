
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contatoPreferido, mensagem, tipoMensagem) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contatoPreferido = contatoPreferido;
        this.mensagem = mensagem;
        this.tipoMensagem = tipoMensagem;
    }
}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value);

        validarBotao()
}

const botaoctt = document.getElementById('botaocontato')
const checkbox = document.getElementById('checkboxtermos')

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    
}

checkbox.addEventListener("change", validarBotao)

function validarBotao() {
    if (checkbox.checked) {
        botaoctt.disabled = false
        botaoctt.style.opacity = 1
    }
    else {
        botaoctt.disabled = true
        botaoctt.style.opacity = 0.3
    }
}
