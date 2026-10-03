
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert(
        "Merci ! Votre demande de rendez-vous a été envoyée. " +
        "L'Auto-École Ben Khedher vous contactera pour confirmer le rendez-vous."
    );

    form.reset();
});