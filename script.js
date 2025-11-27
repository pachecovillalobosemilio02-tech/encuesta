let userData = {};

// Manejar envío del formulario
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recopilar datos
    userData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        intereses: []
    };

    document.querySelectorAll('input[name="intereses"]:checked').forEach(function(checkbox) {
        userData.intereses.push(checkbox.value);
    });

    // Mostrar en página de confirmación
    document.getElementById('confirmNombre').textContent = userData.nombre;
    document.getElementById('confirmEmail').textContent = userData.email;
    const interesesContainer = document.getElementById('confirmIntereses');
    interesesContainer.innerHTML = '';
    if (userData.intereses.length > 0) {
        userData.intereses.forEach(function(interes) {
            const tag = document.createElement('span');
            tag.className = 'interest-tag';
            tag.textContent = interes;
            interesesContainer.appendChild(tag);
        });
    } else {
        interesesContainer.innerHTML = '<span class="data-value">Ninguno seleccionado</span>';
    }

    // Cambiar a página de confirmación
    showPage('confirmationPage');
});

// Botón de editar
document.getElementById('editBtn').addEventListener('click', function() {
    showPage('formPage');
});
// Función para cambiar páginas
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}