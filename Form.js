export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const values = {};
    const inputs = this.form.querySelectorAll('input');

    inputs.forEach(input => {
      if (input.id) {
        const cleanKey = input.id.replace('reg-', '').replace('subscribe-', '');
        values[cleanKey] = input.value;
      }
    });

    return values;
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}
