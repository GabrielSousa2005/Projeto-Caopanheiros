
export function initValidation() {
  const form = document.getElementById('cadastro-form');
  if (!form) return; 

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Iniciando validação...');
    
    resetErrors();
    
    const isNomeValid = validateField('nome', 'Nome Completo é obrigatório.');
    const isEmailValid = validateEmail('email');
    const isCpfValid = validateField('cpf', 'CPF é obrigatório.');
    const isTelefoneValid = validateField('telefone', 'Telefone é obrigatório.');
    const isDataValid = validateField('data', 'Data de Nascimento é obrigatória.');
    const isEnderecoValid = validateField('endereco', 'Endereço é obrigatório.');
    const isCepValid = validateField('cep', 'CEP é obrigatório.');
    const isCidadeValid = validateField('cidade', 'Cidade é obrigatória.');
    const isEstadoValid = validateField('estado', 'Estado é obrigatório.');
    const isTipoValid = validateRadio('tipo', 'Por favor, selecione um tipo de interesse.');

    const isFormValid = isNomeValid && isEmailValid && isCpfValid && isTelefoneValid && 
                        isDataValid && isEnderecoValid && isCepValid && isCidadeValid && 
                        isEstadoValid && isTipoValid;
    
    if (isFormValid) {
      console.log('Formulário válido. Enviando...');
      alert('Cadastro enviado com sucesso!');
      form.reset();
    } else {
      console.log('Formulário inválido. Corrija os erros.');
    }
  });
}

function validateField(fieldId, errorMessage) {
  const field = document.getElementById(fieldId);
  if (field.value.trim() === '') {
    showError(fieldId, errorMessage, field);
    return false;
  }
  return true;
}

function validateEmail(fieldId) {
  const field = document.getElementById(fieldId);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (field.value.trim() === '') {
    showError(fieldId, 'E-mail é obrigatório.', field);
    return false;
  } else if (!emailRegex.test(field.value.trim())) {
    showError(fieldId, 'Por favor, insira um e-mail válido.', field);
    return false;
  }
  return true;
}

function validateRadio(radioName, errorMessage) {
  const field = document.querySelector(`input[name="${radioName}"]:checked`);
  if (!field) {
    showError(radioName, errorMessage);
    return false;
  }
  return true;
}

function showError(fieldIdOrName, message, fieldElement = null) {
  const errorElement = document.querySelector(`.error-message[data-for="${fieldIdOrName}"]`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }

  if (fieldElement) {
    fieldElement.classList.add('invalid-field');
  }
}

function resetErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(msg => {
    msg.textContent = '';
    msg.classList.remove('show');
  });
  
  const invalidFields = document.querySelectorAll('.invalid-field');
  invalidFields.forEach(field => {
    field.classList.remove('invalid-field');
  });
}