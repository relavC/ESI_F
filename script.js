document.getElementById('changeProductBtn').addEventListener('click', function() {
    document.getElementById('selectionScreen').style.display = 'none';
    document.querySelector('.change-product-section').style.display = 'flex';
});

document.getElementById('returnProductBtn').addEventListener('click', function() {
    document.getElementById('selectionScreen').style.display = 'none';
    document.querySelector('.return-product-section').style.display = 'flex';
});

document.getElementById('changeProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showConfirmation('Cambio de Producto');
});

document.getElementById('returnProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showConfirmation('Devolución de Producto');
});

function showConfirmation(type) {
const supportCode = Math.floor(Math.random() * 10000); // Genera un código de atención aleatorio
const date = new Date().toLocaleDateString();
const name = type === 'Cambio de Producto' ? document.getElementById('changeFullName').value : document.getElementById('returnFullName').value;
const email = type === 'Cambio de Producto' ? document.getElementById('changeEmail').value : document.getElementById('returnEmail').value;

document.getElementById('supportCode').innerText = supportCode;
document.getElementById('submissionDate').innerText = date;
document.getElementById('submittedName').innerText = name;
document.getElementById('submittedEmail').innerText = email;

document.querySelector('.change-product-section').style.display = 'none';
document.querySelector('.return-product-section').style.display = 'none';
document.querySelector('.confirmation-section').style.display = 'flex';
}


document.querySelector('.profile-container').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-options');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

// Cierra el dropdown si se hace clic fuera de él
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelector('.dropdown-options').style.display = 'none';
    }
});