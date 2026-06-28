// 1. Aspettiamo che il browser abbia letto tutto l'html
document.addEventListener('DOMContentLoaded', () => {

    // 2. Prendiamo il <div id="utenti-container"> che abbimao creato nell'HTML
    const container = document.getElementById('utenti-container');

    // 3. Dichiariamo la funzione asincrona per recuperare i dati
    async function caricaUtenti() {
        try {
            // Qui dentro metteremo il codice per bussare all'API
        } catch (err) {

            // Qui dentro gestiamo i problemi se il server è spento
            console.err("Si è verificato un errore:", err);
        }
    }

    // 4. Invochiamo la funzione async
    caricaUtenti();

})

