const form = document.querySelector('#feedback-form');
const summary = document.querySelector('#error-summary');
const errorList = document.querySelector('#error-list');
const status = document.querySelector('#form-status');

const fields = [
  { input: document.querySelector('#visitor-name'), message: document.querySelector('#name-error'), label: 'Your name', validate: (value) => value.trim() !== '' },
  { input: document.querySelector('#visitor-email'), message: document.querySelector('#email-error'), label: 'Email address', validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) },
  { input: document.querySelector('#visitor-note'), message: document.querySelector('#message-error'), label: 'What did you notice?', validate: (value) => value.trim() !== '' },
];

function setFieldError(field, hasError) {
  field.input.setAttribute('aria-invalid', String(hasError));
  field.input.classList.toggle('input-invalid', hasError);
  field.message.hidden = !hasError;
  field.message.textContent = hasError
    ? (field.input.type === 'email' ? 'Enter an email address in the format name@example.com.' : 'Complete this field before continuing.')
    : '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = '';
  errorList.replaceChildren();

  const invalidFields = fields.filter((field) => !field.validate(field.input.value));
  fields.forEach((field) => setFieldError(field, invalidFields.includes(field)));

  if (invalidFields.length > 0) {
    invalidFields.forEach((field) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${field.input.id}`;
      link.textContent = `${field.label}: ${field.message.textContent}`;
      item.append(link);
      errorList.append(item);
    });
    summary.hidden = false;
    summary.focus();
    return;
  }

  summary.hidden = true;
  status.textContent = 'Thanks — your practice response is complete. Nothing was sent or stored.';
  form.reset();
  fields.forEach((field) => setFieldError(field, false));
});

fields.forEach((field) => {
  field.input.addEventListener('input', () => {
    if (field.input.getAttribute('aria-invalid') === 'true' && field.validate(field.input.value)) {
      setFieldError(field, false);
    }
  });
});
