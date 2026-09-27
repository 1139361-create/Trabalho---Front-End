document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('entrar');
  const emailError = document.getElementById('emailError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

  emailInput.addEventListener('input', () => {
    if (emailError.textContent !== '') {
      validarCampo();
    }
  });

  emailInput.addEventListener('blur', validarCampo);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const campoValido = validarCampo();

    if (campoValido) {
      emailError.textContent = '';
      alert('Formulário validado com sucesso! (simulação — nenhum dado foi enviado)');
      form.reset();
    } else {
      emailInput.focus();
    }
  });
});