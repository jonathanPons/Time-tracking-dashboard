API = Le service qui a les infos (comme un bibliothécaire)
JSON = La façon dont les infos sont organisées (comme un classeur bien rangé)
fetch() = Ta façon de demander les infos en JavaScript

Objet = Gâteau 🍰
JSON = Recette écrite 📝
Tu ne peux pas envoyer un gâteau par email, mais tu peux envoyer la recette !

Tu demandes un livre (fetch)
Le bibliothécaire te donne une fiche (JSON). Pense à JSON comme à une lettre 📨
Tu lis la fiche pour trouver ce que tu veux (blague.setup)

L'asynchrone

En JavaScript, les requêtes API sont asynchrones = ton code continue pendant que l'API prépare sa réponse.

Les 3 façons de gérer l'asynchrone

Les Callbacks (l'ancienne méthode - à connaître mais pas à utiliser)
javascriptfaireQuelqueChose(function(resultat) {
// Code qui s'exécute quand c'est fini
});

Les Promises (Promesses) ⭐ À MAÎTRISER

Une promesse = "Je te promets de te donner un résultat plus tard"

fetch('url-api')
.then(response => {
// Quand la réponse arrive, fais ça
return response.json();
})
.then(data => {
// Quand les données sont prêtes, fais ça
console.log(data);
})
.catch(error => {
// Si ça marche pas, fais ça
console.log("Erreur :", error);
});

Async/Await (le plus moderne et lisible)

⭐⭐ LE MEILLEUR

async function obtenirDonnees() {
try {
const response = await fetch('url-api'); // Attends la réponse
const data = await response.json(); // Attends la conversion
console.log(data);
} catch (error) {
console.log("Erreur :", error);
}
}

await = "Attends que ça se termine avant de continuer"
async = "Cette fonction contient du code asynchrone"

📡 PARTIE 2 : FAIRE UNE REQUÊTE API

// 1. FETCH = Envoyer la demande
fetch('https://api.exemple.com/users')

// 2. THEN #1 = Transformer la réponse en JSON
.then(response => {
console.log(response); // Objet Response brut
return response.json(); // On le transforme en objet utilisable
})

// 3. THEN #2 = Utiliser les données
.then(data => {
console.log(data); // Tes données utilisables !
// Maintenant tu peux les afficher dans le DOM
})

// 4. CATCH = Gérer les erreurs
.catch(error => {
console.log('Problème:', error);
});

Les différents types de requêtes

// GET = Récupérer des données (par défaut)
fetch('https://api.exemple.com/users')

// POST = Envoyer des données
fetch('https://api.exemple.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
nom: 'Dupont',
age: 25
})
})

// PUT = Modifier des données
fetch('https://api.exemple.com/users/123', {
method: 'PUT',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
nom: 'Martin'
})
})

// DELETE = Supprimer des données
fetch('https://api.exemple.com/users/123', {
method: 'DELETE'
})

Copie ce modèle pour tous tes projets :
async function recupererDonnees() {
try {
// 1. Faire la requête
const response = await fetch('URL_API');

    // 2. Convertir en JSON
    const data = await response.json();

    // 3. Utiliser les données
    console.log(data);
    afficherDansLeDOM(data);

} catch (error) {
// 4. Gérer les erreurs
console.log('Erreur:', error);
}
}

function afficherDansLeDOM(donnees) {
const conteneur = document.getElementById('conteneur');
conteneur.innerHTML = `<p>${donnees.info}</p>`;
}
