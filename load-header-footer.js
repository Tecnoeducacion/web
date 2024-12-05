// Función para cargar archivos HTML en elementos
function loadComponent(elementId, filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar ' + filePath);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Cargar el header y el footer en las respectivas secciones
  window.onload = function() {
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
  };
  