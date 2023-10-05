document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buscar").addEventListener("click", function() {
        const cidade = document.getElementById("cidade").value;
        if (cidade) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=2ce38a846ec1c95f08f67712967b55a5&units=metric`)
            .then(response => response.json())
            .then(data => {
                const resultado = document.getElementById("resultado");
                resultado.innerHTML = `
                    <h2>Previsão do Tempo para ${data.name}, ${data.sys.country}</h2>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Condição: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                console.error("Erro ao buscar dados da API:", error);
            });
        } else {
            alert("Por favor, insira o nome da cidade.");
        }
    });
});