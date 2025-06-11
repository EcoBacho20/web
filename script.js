document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Botones de Solución ---
    const solutionButtons = document.querySelectorAll('.solution-btn');
    const solutionDisplay = document.getElementById('solution-display');

    const solutions = {
        alimentación:'Come alimentos reales y minimiza los ultraprocesados, Incluye vegetales en cada comida principal, Mantén una buena hidratación: 6–8 vasos de agua al día, Controla las porciones para evitar excesos, Mastica lentamente y come con atención.',
        ayuda: 'Usa botellas y loncheras reutilizables en lugar de plásticos desechables, Evita imprimir materiales innecesarios: usa medios digitales, Coloca botes de reciclaje en salones y áreas comunes (papel, plástico, orgánico), Organiza campañas para reducir el uso de envoltorios de un solo uso, Fomenta el uso de lápices y bolígrafos recargables o reciclables.',
        concientización: 'Integra temas ecológicos en clases (biología, ciencias, ética, etc.), Realiza proyectos escolares sobre reciclaje, cambio climático, biodiversidad, Organiza charlas, ferias o concursos sobre medio ambiente, Crea un "Comité Verde" escolar para liderar acciones ecológicas, Promueve.',
        proyectos: 'Lapiceros con botellas o latas decoradas, Macetas con envases de yogurt o cartón de leche, Carteleras verdes hechas con materiales reciclados, Pulseras hechas con retazos de tela o plástico reciclado, Bolsitas aromáticas con hierbas secas cultivadas en clase.',
        fisicas: 'Pausas activas en clase (estiramientos, saltos, respiración, etc. – 5 minutos) ,Juegos tradicionales en tiempos libres, Caminatas grupales por alrededores de la escuela, Circuitos de movimiento en el aula con estaciones: equilibrio, saltos, coordinación y Recreos activos dirigidos con música y juegos organizados.'
    };

    solutionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const solutionKey = button.dataset.solution;
            solutionDisplay.textContent = solutions[solutionKey] || 'No hay descripción para esta solución.';
        });
    });

    // Inicializar el display de soluciones con un mensaje por defecto
    solutionDisplay.textContent = 'Haz clic en un botón para ver una propuesta de solución.';

    // --- Lógica del Carrusel de Imágenes ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Ancho de una imagen

    // Ajustar el slide inicial
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) { // Si ya estamos en la última imagen
            counter = 0; // Volver al inicio
        } else {
            counter++;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) { // Si ya estamos en la primera imagen
            counter = carouselImages.length - 1; // Ir a la última
        } else {
            counter--;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Clonar imágenes para un carrusel infinito (opcional, para un efecto más suave)
    // Para simplificar, en esta versión no se implementa el clonado, pero se puede añadir si se desea un "loop" más fluido.

    // --- Lógica del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const suggestion = document.getElementById('suggestion').value;

        // **Aquí es donde necesitas un backend para enviar el correo.**
        // JavaScript del lado del cliente NO puede enviar correos directamente a un correo personal por razones de seguridad.

        // Una forma común de manejar esto es usar un servicio de backend como:
        // 1. Un script de PHP en tu servidor.
        // 2. Un servicio de terceros como EmailJS, Formspree, Netlify Forms, etc.
        // 3. Un backend personalizado con Node.js, Python, etc.

        // Ejemplo conceptual (NO FUNCIONAL SIN BACKEND):
        /*
        fetch('/send-email', { // Esta ruta debería ser tu endpoint de backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, suggestion }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('¡Gracias por tu sugerencia! Ha sido enviada.');
                contactForm.reset(); // Limpiar el formulario
            } else {
                alert('Hubo un error al enviar tu sugerencia. Por favor, intenta de nuevo.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un problema de conexión. Por favor, intenta de nuevo.');
        });
        */

        // **Para este ejemplo, solo mostraremos una alerta para simular el envío:**
        alert(`Sugerencia enviada:\n\nNombre: ${name}\nCorreo: ${email}\nSugerencia: ${suggestion}\n\nNota: Para enviar esto a un correo real, se necesita un servidor (backend).`);
        contactForm.reset(); // Limpiar el formulario después de "enviar"
    });
});