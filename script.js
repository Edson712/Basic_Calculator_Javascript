function addToField(value) {
    document.getElementById('field').value += value;
  }
  
  function calculate() {
    const fieldValue = document.getElementById('field').value;
    const result = eval(fieldValue);
    document.getElementById('field').value = result;
  }
  
  function eraseField() {
    document.getElementById('field').value = '';
  }
  