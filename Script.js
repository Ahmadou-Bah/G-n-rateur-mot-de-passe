// script.js

// Fonction pour générer un mot de passe
function genererMotDePasse() {
  const longueurs = 12;
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let motDePasse = "";

  for (let i = 0; i < longueurs; i++) {
    let index = Math.floor(Math.random() * caracteres.length);
    motDePasse += caracteres.charAt(index);
  }

  document.getElementById("password").value = motDePasse;

  // Réinitialiser le message
  afficherMessage("", "");
}

// Fonction pour copier le mot de passe
function copierMotDePasse() {
  const champ = document.getElementById("password");

  if (champ.value === "") {
    afficherMessage("Veuillez d'abord générer un mot de passe.", "error");
    return;
  }

  champ.select();
  champ.setSelectionRange(0, 99999);
  document.execCommand("copy");

  afficherMessage("Mot de passe copié !", "success");
}

// Fonction pour afficher un message dans le conteneur
function afficherMessage(texte, type) {
  const zoneMessage = document.getElementById("message");
  zoneMessage.textContent = texte;

  // Supprimer les anciennes classes
  zoneMessage.classList.remove("success", "error");

  // Ajouter la bonne classe si nécessaire
  if (type === "success") {
    zoneMessage.classList.add("success");
  } else if (type === "error") {
    zoneMessage.classList.add("error");
  }
}
