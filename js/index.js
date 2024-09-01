
document.getElementById('buttonText').addEventListener('click', function() {
    // Obtener el valor data proporcionado
    const dataValue = document.getElementById('inputText').value;
  
    // Guardar el valor en localStorage
    localStorage.setItem('dataValue', dataValue);
  
    // Confirmación opcional
    alert('¡Guardado!');
  });