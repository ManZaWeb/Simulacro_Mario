document.addEventListener('DOMContentLoaded', function() {
    
    const calcular = document.getElementById('calcular')
    const messageDiv = document.getElementById('message')
    const messageDiv2 = document.getElementById('message2')

    calcular.addEventListener('click', function() {
        const long = parseFloat(document.getElementById('longitud').value);
        const ancho = parseFloat(document.getElementById('ancho').value);

        const perimetro = (long*2) + (ancho*2)
        const area = long * ancho
        messageDiv.innerHTML = 'El perimetro es igual a ' + perimetro;
        messageDiv2.innerHTML = 'El area es igual a ' + area;
        
        
    });
});
