document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('colorForm');
    const palette = document.getElementById('colorPalette');
    const nameInput = document.getElementById('colorName');
    const typeInput = document.getElementById('colorType');
    const codeInput = document.getElementById('colorCode');
    const nameError = document.getElementById('colorNameError');
    const codeError = document.getElementById('colorCodeError');

    let colors = JSON.parse(getCookie('colorList') || '[]');

    colors.forEach(addColorBlock);

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        const name = nameInput.value.trim();
        const type = typeInput.value;
        const code = codeInput.value.trim();

        clearErrors();

        if (!isValidName(name)) return;
        if (!isUniqueName(name)) return;
        if (!isValidCode(type, code)) return;

        const newColor = { name, type, code };
        colors.push(newColor);
        setCookie('colorList', JSON.stringify(colors), 3);
        addColorBlock(newColor);
        form.reset();
    }

    function clearErrors() {
        nameError.textContent = '';
        codeError.textContent = '';
    }

    function isValidName(name) {
        if (!name.match(/^[a-zA-Z]+$/)) {
            nameError.textContent = 'Name must contain only letters.';
            return false;
        }
        return true;
    }

    function isUniqueName(name) {
        if (colors.some(color => color.name.toLowerCase() === name.toLowerCase())) {
            nameError.textContent = 'Name must be unique.';
            return false;
        }
        return true;
    }

    function isValidCode(type, code) {
        switch (type) {
            case 'RGB':
            case 'RGBA':
                return isValidRGBorRGBA(code);
            case 'HEX':
                return isValidHex(code);
            default:
                codeError.textContent = 'Invalid color type.';
                return false;
        }
    }

    function isValidRGBorRGBA(code) {
        const parts = code.split(',');
        if (parts.length !== 3 && parts.length !== 4) {
            codeError.textContent = 'Invalid RGB or RGBA code format.';
            return false;
        }
        for (let part of parts) {
            const num = Number(part.trim());
            if (isNaN(num) || num < 0 || num > 255) {
                codeError.textContent = 'Invalid RGB or RGBA value (0-255).';
                return false;
            }
        }
        return true;
    }

    function isValidHex(code) {
        if (!code.match(/^#([0-9A-Fa-f]{6})$/)) {
            codeError.textContent = 'Invalid HEX code format (#RRGGBB).';
            return false;
        }
        return true;
    }

    function addColorBlock(color) {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'colorBlock';
        colorDiv.textContent = color.name;
        if (color.code === '#FFFFFF') {
            colorDiv.style.color = 'black';
        }
        colorDiv.style.backgroundColor = color.type === 'HEX' ? color.code : `${color.type}(${color.code})`;
        palette.appendChild(colorDiv);
    }

    function setCookie(name, value, hours) {
        const date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }

    function getCookie(name) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for(let i= 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
});
