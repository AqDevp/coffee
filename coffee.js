const text = document.querySelector(".txt");

text.addEventListener('scroll', () => {
    text.style.marginTop = value * 2.5 + 'px';
})
