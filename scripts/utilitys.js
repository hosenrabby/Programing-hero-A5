function getDataById(id) {
    let data = document.getElementById(id).innerText;
        data = parseInt(data);
        return data;
}


function hexColorCode() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}