const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte);
const alimentation = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);

// TODO : calculez le total, le budget restant et budgetRespected.
const total = transport + alimentation + loisirs;
const budgetRestant = budget - total;
const budgetRespected = budgetRestant >= 0;

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Rapport de dépenses à compléter pour ${nom}`);
console.log(`Total des dépenses : ${total} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Respect du budget : ${budgetRespected ? 'Oui' : 'Non'}`);
console.log(`Dépenses détaillées :
  Transport : ${transport} FCFA
  Alimentation : ${alimentation} FCFA
  Loisirs : ${loisirs} FCFA`);