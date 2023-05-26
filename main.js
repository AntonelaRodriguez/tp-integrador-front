function calcularTotal() {
    var categoria = document.getElementById('categoria').value;
    var cantidad = document.getElementById('cantidad').value;
    
    var descuento = 0;
    if (categoria === 'estudiante') {
      descuento = 0.2; // 80% de descuento para estudiantes
    } else if (categoria === 'trainee') {
      descuento = 0.5; // 50% de descuento para trainees
    } else if (categoria === 'junior') {
      descuento = 0.85; // 15% de descuento para juniors
    } else if (categoria === 'none') {
        descuento = 1; // Sin descuento para juniors
      }
    
    var total = 200 * cantidad * descuento; // Precio base de $100 por ticket
    
    var totalPagarElement = document.getElementById('total-pagar');
    totalPagarElement.textContent = total;
  }

  function borrarDatos() {
    document.getElementById('categoria').selectedIndex = 0; // Restablecer la opción seleccionada a la primera opción
    document.getElementById('cantidad').value = 0; // Restablecer la cantidad a 1
    document.getElementById('total-pagar').textContent = ''; // Borrar el contenido del total a pagar
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
  }