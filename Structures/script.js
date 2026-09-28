document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const campo = document.getElementById('campo');
  const rotulo = document.getElementById('campoLabel');
  const erro = document.getElementById('campoErro');
  const botao = document.getElementById('btnContinuar');
  const etapaInfo = document.getElementById('etapaInfo');
  const usuarioInfo = document.getElementById('usuarioInfo');
  const btnAlterar = document.getElementById('btnAlterar');
  const titulo = document.getElementById('login-title');
  const subtitulo = document.getElementById('subtitulo');
  const sucesso = document.getElementById('sucesso');
  const btnSair = document.getElementById('btnSair');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

  let etapa = 1;          // 1 = email/celular, 2 = senha
  let identificador = ''; // guarda o email/celular digitado

  function mostrarErro(mensagem) {
    erro.textContent = mensagem;
    campo.setAttribute('aria-invalid', 'true');
  }

  function limparErro() {
    erro.textContent = '';
    campo.removeAttribute('aria-invalid');
  }

  function validarIdentificador() {
    const valor = campo.value.trim();

    if (valor === '') {
      mostrarErro('Informe um email ou número de celular.');
      return false;
    }
    if (!emailRegex.test(valor) && !telefoneRegex.test(valor)) {
      mostrarErro('Informe um email ou número de celular válido.');
      return false;
    }
    limparErro();
    return true;
  }

  function validarSenha() {
    if (campo.value === '') {
      mostrarErro('Informe sua senha.');
      return false;
    }
    limparErro();
    return true;
  }

  // Etapa 2: o MESMO campo passa a pedir a senha
  function irParaEtapaSenha() {
    etapa = 2;
    identificador = campo.value.trim();
    usuarioInfo.textContent = identificador;
    etapaInfo.hidden = false;

    rotulo.textContent = 'Senha';
    campo.type = 'password';
    campo.value = '';
    campo.setAttribute('autocomplete', 'current-password');
    botao.textContent = 'Entrar';
    campo.focus();
  }

  // Volta para a etapa 1 (botão "Alterar" ou "Sair")
  function voltarParaEtapaEmail() {
    etapa = 1;
    etapaInfo.hidden = true;

    rotulo.textContent = 'Email ou número de celular';
    campo.type = 'text';
    campo.value = identificador;
    campo.setAttribute('autocomplete', 'username');
    botao.textContent = 'Continuar';
    limparErro();
    campo.focus();
  }

  function mostrarSucesso() {
    form.hidden = true;
    titulo.hidden = true;
    subtitulo.hidden = true;
    sucesso.hidden = false;
  }

  campo.addEventListener('input', () => {
    if (erro.textContent !== '') {
      limparErro();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (etapa === 1) {
      if (validarIdentificador()) {
        irParaEtapaSenha();
      } else {
        campo.focus();
      }
    } else {
      if (validarSenha()) {
        mostrarSucesso(); // aceita qualquer senha (simulação)
      } else {
        campo.focus();
      }
    }
  });

  btnAlterar.addEventListener('click', voltarParaEtapaEmail);

  btnSair.addEventListener('click', () => {
    identificador = '';
    sucesso.hidden = true;
    titulo.hidden = false;
    subtitulo.hidden = false;
    form.hidden = false;
    voltarParaEtapaEmail();
  });
});