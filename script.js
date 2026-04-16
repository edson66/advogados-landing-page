// Cria o observador
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Se o elemento estiver visível na tela
        if (entrada.isIntersecting) {
            // Adiciona a classe que faz a animação acontecer
            entrada.target.classList.add('mostrar');
            
            // faz a animação acontecer apenas uma vez
            observador.unobserve(entrada.target); 
        }
    });
});

// Pega todos os elementos que têm a classe 'escondido', 'escondido-esquerda' ou 'escondido-direita'
const elementosEscondidos = document.querySelectorAll('.escondido, .escondido-esquerda, .escondido-direita, .escondido-baixo');

// Manda o observador ficar de olho em cada um deles
elementosEscondidos.forEach((elemento) => {
    observador.observe(elemento);
});