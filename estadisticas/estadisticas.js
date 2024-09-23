
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

// Función para mostrar el gráfico por temporadas
function createSeasonChart() {
    var ctxSeason = document.getElementById('seasonChart').getContext('2d');
    return new Chart(ctxSeason, {
        type: 'bar',
        data: {
            labels: ['Temporada 1', 'Temporada 2'],
            datasets: [
                {
                    label: 'Audiencia promedio (millones)',
                    data: [2.8, 3.1],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Rating IMDb',
                    data: [8.9, 9.0],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Estadísticas por Temporadas',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
  }
  
  // Función para mostrar el gráfico por episodios (20 episodios por temporada)
  function createEpisodeChart() {
    var ctxEpisode = document.getElementById('episodeChart').getContext('2d');
    return new Chart(ctxEpisode, {
        type: 'bar',
        data: {
            labels: [
                // Etiquetas para los episodios de la temporada 1 y 2
                'S01E01', 'S01E02', 'S01E03', 'S01E04', 'S01E05', 'S01E06', 'S01E07', 'S01E08', 'S01E09', 'S01E10',
                'S01E11', 'S01E12', 'S01E13', 'S01E14', 'S01E15', 'S01E16', 'S01E17', 'S01E18', 'S01E19', 'S01E20',
                'S02E01', 'S02E02', 'S02E03', 'S02E04', 'S02E05', 'S02E06', 'S02E07', 'S02E08', 'S02E09', 'S02E10',
                'S02E11', 'S02E12', 'S02E13', 'S02E14', 'S02E15', 'S02E16', 'S02E17', 'S02E18', 'S02E19', 'S02E20'
            ],
            datasets: [
                {
                    label: 'Audiencia (millones)',
                    data: [
                        // Audiencia de los 20 episodios de la temporada 1
                        3.2, 2.9, 3.1, 3.0, 3.3, 3.2, 2.8, 3.0, 3.2, 3.1,
                        3.3, 2.9, 3.1, 3.0, 3.4, 3.2, 2.9, 3.0, 3.3, 3.2,
                        // Audiencia de los 20 episodios de la temporada 2
                        3.4, 3.5, 3.6, 3.2, 3.1, 3.5, 3.4, 3.3, 3.7, 3.6,
                        3.5, 3.8, 3.7, 3.5, 3.6, 3.7, 3.6, 3.8, 3.9, 4.0
                    ],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Rating IMDb',
                    data: [
                        // Ratings de IMDb para los 20 episodios de la temporada 1
                        8.4, 8.5, 8.3, 8.7, 8.8, 8.6, 8.2, 8.5, 8.7, 8.6,
                        8.8, 8.4, 8.6, 8.7, 8.9, 8.6, 8.4, 8.7, 8.9, 8.8,
                        // Ratings de IMDb para los 20 episodios de la temporada 2
                        9.0, 9.1, 8.9, 9.2, 9.3, 9.0, 9.1, 9.2, 9.3, 9.4,
                        9.5, 9.6, 9.3, 9.5, 9.7, 9.6, 9.4, 9.7, 9.8, 9.9
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Estadísticas por Episodios (20 episodios por temporada)',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
  }
  
  // Inicialización del gráfico por temporadas
  var seasonChart = createSeasonChart();
  var episodeChart;
  
  // Alternar entre gráficos
  document.getElementById('toggleButton').addEventListener('click', function() {
    var seasonChartContainer = document.getElementById('seasonChartContainer');
    var episodeChartContainer = document.getElementById('episodeChartContainer');
    
    if (seasonChartContainer.style.display === 'none') {
        // Mostrar gráfico por temporadas
        seasonChartContainer.style.display = 'block';
        episodeChartContainer.style.display = 'none';
        this.textContent = 'Ver estadísticas por episodios';
    } else {
        // Mostrar gráfico por episodios
        seasonChartContainer.style.display = 'none';
        episodeChartContainer.style.display = 'block';
        
        if (!episodeChart) {
            episodeChart = createEpisodeChart(); // Crear gráfico de episodios solo una vez
        }
        
        this.textContent = 'Ver estadísticas por temporadas';
    }
  });