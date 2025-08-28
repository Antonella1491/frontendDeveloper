// Recupera i dati salvati
const data = JSON.parse(localStorage.getItem("formData"));
const riepilogoBox = document.getElementById("riepilogoBox");

if (data) {
    riepilogoBox.innerHTML = `
        <p><strong>Nome:</strong> ${data.nome}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Messaggio:</strong><br>${data.messaggio}</p>
    `;
} else {
    riepilogoBox.innerHTML = "<p>Nessun dato trovato.</p>";
}

// Gestione bottoni
document.getElementById("confermaBtn").addEventListener("click", () => {
    if (data) {
        const destinatario = "antonellapirozz_ap@libero.it";
        const oggetto = "Riepilogo dati";
        const corpo = `
Nome: ${data.nome}
Email: ${data.email}
Messaggio: 
${data.messaggio}
        `;

        // creo il link mailto con encoding
        const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(corpo)}`;

        window.location.href = mailtoLink;
    } else {
        alert("Nessun dato da inviare.");
    }
});

document.getElementById("annullaBtn").addEventListener("click", () => {
    window.location.href = "contactsForm.html"; // torna al form
});
