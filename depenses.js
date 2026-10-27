// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((total, montant) => total + montant, 0);
}
// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }

  return calculerTotal(depenses) / depenses.length;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter(montant => montant > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }

  return Math.max(...depenses);
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.

const total = calculerTotal(depensesSemaine);
const moyenne = calculerMoyenne(depensesSemaine);
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine);
const maximum = trouverMaximum(depensesSemaine);

// Afficher le tableau avant le tri
console.log("Avant le tri :", depensesSemaine);

// Créer une copie triée numériquement
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);

// Afficher la copie triée, sans modifier le tableau original
console.log("Après le tri :", depensesTriees);

// total : number ; unité : FCFA
// moyenne : number ; unité : FCFA/jour
// maximum : number ; unité : FCFA

console.log(`
===== RAPPORT DES DÉPENSES =====
Total : ${total} FCFA
Moyenne par jour : ${moyenne} FCFA
Dépenses > 2000 FCFA : ${grossesDepenses}
Maximum : ${maximum} FCFA
Copie triée : ${depensesTriees}
===============================
`);
