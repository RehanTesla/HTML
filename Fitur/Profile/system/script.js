const typingText = document.getElementById("typingText");
const texts = [
    "Ahli HTML, CSS, JS",
    "Penyuka Teknologi",
    "Pembuat Proyek Keren"
];
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[index].length) {
        typingText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});
