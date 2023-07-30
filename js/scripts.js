    // Função para ajustar a altura do carrossel
    function adjustCarouselHeight() {
        var windowHeight = window.innerHeight;
        var customCarousel = document.querySelector('.custom-carousel');
        customCarousel.style.maxHeight = windowHeight * 0.7 + 'px';
    }

    // Chama a função quando a página é carregada e também quando a janela é redimensionada
    window.addEventListener('load', adjustCarouselHeight);
    window.addEventListener('resize', adjustCarouselHeight);