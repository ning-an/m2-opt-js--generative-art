function generateArt() {
    for (let i = 0; i < 500; i++) {
        const randomWidth = `${Math.random() * 20}%`;
        const randomHeight = `${Math.random() * 6}%`;
        const posX = `${Math.random() * 100}%`;
        const posY = `${Math.random() * 100}%`;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomRotation = `${Math.random() * 360}deg`;
        const randomBlend = blendModes[Math.floor(Math.random() * blendModes.length)];
        const randomSkew = `${Math.random() * 360}rad`;

        const newDiv = document.createElement('div');
        newDiv.style.position = 'absolute';
        newDiv.style.width = randomWidth;
        newDiv.style.height = randomHeight;
        newDiv.style.left = posX;
        newDiv.style.top = posY;
        newDiv.style.backgroundColor = randomColor;
        newDiv.style.transform = `rotate(${randomRotation}) skew(${randomSkew})`;
        newDiv.style.mixBlendMode = randomBlend;
        newDiv.style.zIndex = 500;
        
        canvas.appendChild(newDiv);
    }
}

function regenerateArt() {
    canvas.innerHTML = '';
    generateArt();
}

const canvas = document.querySelector('#canvas');
const regenerateButton = document.querySelector('#regenerate');
const colors = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'];
const blendModes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 
                    'lighten', 'color-dodge', 'color-burn', 'hard-light',
                    'soft-light', 'difference', 'exclusion', 'hue',
                    'saturation', 'color', 'luminosity'];

generateArt();

regenerateButton.addEventListener('click', regenerateArt);