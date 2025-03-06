function scrollToDiv(divId) {
    const targetDiv = document.getElementById(divId);
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}