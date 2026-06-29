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
            if (!response) {
                throw new Error(`Errore del server: ${response.status}`);
            }

            // 7. Estraiamo il JSON e trasformiamolo in un array leggibile
            const utenti = await response.json();

            // 8. Svuotiamo il testo "Caricamento utenti in corso..."
            container.innerHTML = '';

            // 9. Cicliamo l'array degli utenti ricevuto dal database
            utenti.forEach(utente => {

                // 10. Creaiamo un elemento <div> virtuale nella memoria del browser
                const card = document.createElement('div');

                // 11. Gli assegniamo la clasee CSS "card" per dargli lo stile
                card.classList.add('card');

                // 12. Riempio la card con la struttura HTML e i dati dinamci dell'utente
                card.innerHTML = `
                    <div class="card-img-container">
                        <img src="/image/${utente.foto_profilo}" alt="Foto di ${utente.nome}">
                    </div>
                        <div class="card-info">
                        <h3>${utente.nome} ${utente.cognome}</h3>
                        <p class="info_dati">${utente.eta}</p>
                        <p class="info_dati">${utente.nazionalita}</p>
                        <p class="info_dati">${utente.colore_occhi}</p>
                    </div>
                `;

                // 13. Appendiamo la card appena creata dentro il contenitore principale
                container.appendChild(card);

            })

        } catch (errore) {

            // Qui dentro gestiamo i problemi se il server è spento
            console.errore("Si è verificato un errore:", errore);
        }
    }

    // 4. Invochiamo la funzione async
    caricaUtenti();

});

