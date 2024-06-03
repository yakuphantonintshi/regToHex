function convertHexToRGB() {
    const hex = document.getElementById('hexInput').value;
    const rgbResult = document.getElementById('rgbResult');
    
    // Check if the input is a valid hex color code
    const isValidHex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex);
    
    if (!isValidHex) {
        rgbResult.textContent = 'Invalid hex code';
        return;
    }

    let fullHex = hex;
    if (hex.length === 4) {
        fullHex = '#' + [...hex.slice(1)].map(char => char + char).join('');
    }
    const r = parseInt(fullHex.slice(1, 3), 16);
    const g = parseInt(fullHex.slice(3, 5), 16);
    const b = parseInt(fullHex.slice(5, 7), 16);

    rgbResult.textContent = `RGB(${r}, ${g}, ${b})`;
}