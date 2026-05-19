const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

  // 1. aggiungiTask ora accetta anche la priorità ("alta", "media", "bassa")
function aggiungiTask(testo, priorita) {
  const li = document.createElement("li"); //crea li
  li.textContent = testo + " "; //testo che gli daremo + spazio 

  //li.textContent è una proprietà del DOM cpn cui il browser crea un oggetto li 

  // creo Badge che mostra la priorità con la classe .badge dal CSS
  const badge = document.createElement("span");
  badge.classList.add("badge");//aggiunge automaticamente la classe badge all'elemento span
  badge.textContent = priorita;

  // 2. Bottone elimina
  const button = document.createElement("button");
  button.textContent = "elimina";
//gli specifica gli eredi ovvero=li genitore di badge e button (. diventa l'ultimo figlio(?))
  li.appendChild(badge);
  li.appendChild(button);
  li.classList.add("priorita-" + priorita); //  aggiunge la stringa priorità concatenata al parametro priorità che arriverà poi in aggiungiTask

  lista.appendChild(li);//gli specifica gli eredi ovvero= la classe lista è genitore di li (. diventa l'ultimo figlio(?))
  aggiornaContatore();
}

// Conta i task presenti e aggiorna il contatore
function aggiornaContatore() {
  const tasks = lista.querySelectorAll("li"); //seleziona tutti gli li che trova dentro la classe lista
  contatore.textContent = tasks.length; //scrive
}

aggiungiTask("Studiare JavaScript", "alta");
aggiungiTask("Bere il caffè", "bassa");
aggiungiTask("Studiare", "media");
aggiungiTask("Mangiare", "bassa");
aggiungiTask("Riposarsi", "alta"); //ALTISSIMA
//Valorizzo i parametri di aggiungiTask(testo, priorita)