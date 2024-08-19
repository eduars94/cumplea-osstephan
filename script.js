document.addEventListener('DOMContentLoaded', () => {
    const locationButton = document.querySelector('.location-button');
    
    locationButton.addEventListener('click', () => {
        let location = prompt("Por favor, ingresa la ubicación:");
        
        if (location) {
            let details = document.querySelector('.details');
            details.innerHTML += `<br>Ubicación: ${location}`;
            alert('Ubicación agregada: ' + location);
        }
    });
});
