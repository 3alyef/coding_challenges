function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        // Limpa o temporizador anterior, se houver
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Define um novo temporizador
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// rever
