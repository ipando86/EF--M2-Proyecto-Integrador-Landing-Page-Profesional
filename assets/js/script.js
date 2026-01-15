
$(document).ready(function() {

   $(document).ready(function() {
    $("#enviar_formulario").on("click", function(event) {
        event.preventDefault();

        const nombre = $("#nombref").val();
        const correo = $("#correof").val();
        const mensaje = $("#mensajef").val(); 

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor, rellena todos los campos.");
            console.log("Datos no enviados");
        } else {
            console.log("Datos enviados:", { nombre, correo, mensaje });
            alert(`¡Gracias ${nombre}! Tu solicitud para el día ${mensaje} ha sido enviada.`);
            
            $("#reservaForm")[0].reset();
        }
    });
});

$('a[href^="#"]').on('click', function(event) {

    const target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        const paddingSuperior = 100;
        
        $('html, body').stop(true, true).animate({
            scrollTop: target.offset().top - paddingSuperior
        }, 800);
    }
    return false;
});
});