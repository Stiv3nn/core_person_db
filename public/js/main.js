// 1. Aspettiamo che il browser abbia letto tutto l'html
document.addEventListener('DOMContentLoaded', () => {

    // 2. Prendiamo il <div id="utenti-container"> che abbimao creato nell'HTML
    const container = document.getElementById('utenti-container');

    // 3. Dichiariamo la funzione asincrona per recuperare i dati
    async function caricaUtenti() {
        try {

            // 5. Qui dentro metteremo il codice per bussare all'API
            const response = await fetch('/api/utenti');

            // 6. Controllo di sicurezza: la chiamata è andata a buon fine?
            if (!resposne) {
                throw new Error(`Errore del server: ${response.status}`);
            }

            // 7. Estraiamo il JSON e trasformiamolo in un array leggibile
            const utenti = await response.json();

            // 8. Svuotiamo il testo "Caricamento utenti in corso..."
            container.innerHTML = '';

        } catch (err) {

            // Qui dentro gestiamo i problemi se il server è spento
            console.err("Si è verificato un errore:", err);
        }
    }

    // 4. Invochiamo la funzione async
    caricaUtenti();

})

