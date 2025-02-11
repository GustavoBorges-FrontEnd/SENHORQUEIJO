function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.btnfilter')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Função para filtrar produtos por categoria
function filtrarProdutos(categoria) {
    // Seleciona todos os cards de produtos
    const cards = document.querySelectorAll('.card');

    // Itera sobre cada card
    cards.forEach(card => {
        // Obtém a categoria do card
        const cardCategoria = card.getAttribute('data-categoria');

        // Verifica se a categoria do card corresponde à categoria fornecida
        if (categoria === 'todos' || cardCategoria === categoria) {
            // Se corresponder, exibe o card
            card.style.display = 'block';
        } else {
            // Se não corresponder, oculta o card
            card.style.display = 'none';
        }
    });
}