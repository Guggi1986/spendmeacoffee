const kommentarListe = document.querySelector('.comment-list');

// Beispiel-Array mit Kommentaren
const kommentare = [
  { name: 'Max', text: 'Tolles Projekt!' },
  { name: 'Anna', text: 'Ich finde das sehr interessant.' },
  { name: 'Peter', text: 'Kann ich das auch auf meinem Computer installieren?' },
  { name: 'Max', text: 'Tolles Projekt!' },
  { name: 'Anna', text: 'Ich finde das sehr interessant.' },
  { name: 'Peter', text: 'Kann ich das auch auf meinem Computer installieren?' },
  { name: 'Max', text: 'Tolles Projekt!' },
  { name: 'Anna', text: 'Ich finde das sehr interessant.' },
  { name: 'Peter', text: 'Kann ich das auch auf meinem Computer installieren? Kann ich das auch auf meinem Computer installieren? Kann ich das auch auf meinem Computer installieren? Kann ich das auch auf meinem Computer installieren?' },
];

// Schleife durch das Array und erstellen von Listenelementen für jeden Kommentar
kommentare.forEach(kommentar => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="kommentar-name">${kommentar.name}:</span><span class="kommentar-text">${kommentar.text}</span>`;
  kommentarListe.appendChild(li);
});
