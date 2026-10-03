
// Formulaire géré par Formspree.
// L'envoi se fait directement via l'attribut "action" du formulaire.

const form = document.querySelector("#rendez-vous form");

if (form) {
    form.addEventListener("submit", function () {
        const button = form.querySelector("button[type='submit']");

        if (button) {
            button.textContent = "Envoi en cours...";
            button.disabled = true;
        }
    });
}
