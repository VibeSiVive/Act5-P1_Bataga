document.addEventListener('DOMContentLoaded', function() {
    const redButton = document.querySelector('input[value="Red"]');
    const yellowButton = document.querySelector('input[value="Yellow"]');
    const greenButton = document.querySelector('input[value="Green"]');
    const redLight = document.getElementById('RedLight');
    const yellowLight = document.getElementById('YellowLight');
    const greenLight = document.getElementById('GreenLight');
    
    function resetLights() {
        redLight.style.backgroundColor = '';
        yellowLight.style.backgroundColor = '';
        greenLight.style.backgroundColor = '';
        redLight.classList.remove('blink'); 
    }
    
    function blinkRed() {
        redLight.classList.add('blink');
    }
    
    redButton.addEventListener('click', function() {
        makeLight('Red');
        blinkRed();
    });
    
    yellowButton.addEventListener('click', function() {
        makeLight('Yellow');
    });
    
    greenButton.addEventListener('click', function() {
        makeLight('Green');
    });
    
    function makeLight(color) {
        resetLights();
        if (color === 'Red') {
            redLight.style.backgroundColor = 'red';
        } else if (color === 'Yellow') {
            yellowLight.style.backgroundColor = 'yellow';
        } else if (color === 'Green') {
            greenLight.style.backgroundColor = 'green';
        }
    }
    });