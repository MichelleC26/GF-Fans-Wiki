// Inicio de enlaces de conencion a las demas paginas
document.querySelector('input[value="Inicio"]').addEventListener('click', function() {
    window.location.href = "../inicio/sipnosis.html";
});

document.querySelector('input[value="Personajes"]').addEventListener('click', function() {
    window.location.href = "../personajes/personajes.html";
});

document.querySelector('input[value="Episodios"]').addEventListener('click', function() {
    window.location.href = "../episodios/episodios.html";
});

document.querySelector('input[value="Extras"]').addEventListener('click', function() {
    window.location.href = "../extras/extras.html";
});

document.querySelector('input[value="Merchandising"]').addEventListener('click', function() {
    window.location.href = "../tienda/tienda.html";
});

document.querySelector('input[value="Estadisticas"]').addEventListener('click', function() {
  window.location.href = "../estadisticas/estadisticas.html";
});



// Inicio de datos de la tienda

document.addEventListener('DOMContentLoaded', function() {
    console.log('JS cargado'); // Asegúrate de que el script está funcionando
  
    const productos = document.querySelectorAll('.producto');
    const modal = document.getElementById('modalProducto');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const closeModal = document.querySelector('.close');
  
    productos.forEach(producto => {
      producto.addEventListener('click', function() {
        console.log('Producto clicado'); // Asegúrate de que el clic está funcionando
  
        // Obtener los datos del producto
        const name = this.getAttribute('data-name');
        const img = this.getAttribute('data-img');
        const price = this.getAttribute('data-price');
        const description = this.getAttribute('data-description');
  
        // Actualizar el contenido del modal con los datos del producto
        modalImg.src = img;
        modalName.textContent = name;
        modalDescription.textContent = description;
        modalPrice.textContent = 'Precio: ' + price;
  
        // Mostrar el modal
        modal.style.display = 'block';
      });
    });
  
    // Cerrar el modal cuando se hace clic en la "x"
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });










  // Seleccionamos el contenedor de productos
const productContainer = document.querySelector('.productos-grid');

// Guardamos los productos originales en un array
const originalProducts = Array.from(document.querySelectorAll('.producto'));

// Función para mostrar los productos en el contenedor
function displayProducts(productsArray) {
  productContainer.innerHTML = ''; // Limpiamos el contenedor

  productsArray.forEach(product => {
    productContainer.appendChild(product);
  });
}

// Función para ordenar los productos de mayor a menor precio
function sortProductsByPriceDescending() {
  const sortedProducts = Array.from(document.querySelectorAll('.producto')).sort((a, b) => {
    const priceA = parseFloat(a.getAttribute('data-price').replace('$', ''));
    const priceB = parseFloat(b.getAttribute('data-price').replace('$', ''));
    return priceB - priceA;
  });

  displayProducts(sortedProducts);
}

// Función para restablecer el orden original
function resetProductsOrder() {
  displayProducts(originalProducts);
}

// Añadir listeners a los botones (asegúrate de agregarlos en el HTML)
document.getElementById('sort-price-button').addEventListener('click', sortProductsByPriceDescending);
document.getElementById('reset-price-button').addEventListener('click', resetProductsOrder);

// Mostrar los productos al cargar la página
displayProducts(originalProducts);
