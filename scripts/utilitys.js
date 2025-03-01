function getDataById(id) {
    let data = document.getElementById(id).innerText;
        data = parseInt(data);
        return data;
}


deep seek copy
function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Ensure the color code is 6 digits long by padding with leading zeros
    return `#${randomColor.padStart(6, '0')}`;
}

// Example usage
const color = getRandomHexColor();
console.log(color); // Output: e.g., "#3e2f1b"


const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = `Color: ${randomColor}`;
});

function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}