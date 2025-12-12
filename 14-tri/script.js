//----------------------------------------------------------------------------------------------//
// Étape 1 : RTFM done
//----------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------//
// Étape 2 : Bubble
// Écris l'algorithme du tri à bulle en pseudo-code.
//----------------------------------------------------------------------------------------------//
// 1:  procédure tri_bulles(tableau)
// 2:  n ← longueur(tableau)
// 3:  pour i de n-1 à 1 faire
// 4:      pour j de 0 à i-1 faire
// 5:          si tableau[j] > tableau[j + 1] alors
// 6:              échanger tableau[j] et tableau[j+1]
// 7:          fin si
// 8:      fin pour
// 9:  fin pour
// 10: fin procédure
//----------------------------------------------------------------------------------------------//
// En français
//----------------------------------------------------------------------------------------------//
// 1. On crée une procédure (une sorte de recette) qui s'appelle 'tri_bulles' 
//    et qui prend en entrée un tableau de nombres.
// 2. On crée une variable appelée 'n' 
//    et on y stocke le nombre d'éléments qu'il y a dans le tableau.
// 3. On va répéter des actions plusieurs fois. La variable 'i' 
//    va prendre successivement les valeurs n-1, puis n-2, puis n-3... jusqu'à 1.
//    Exemple : si n=5, alors i va prendre les valeurs 4, 3, 2, 1
//    Pourquoi partir de n-1 ? Parce que les indices d'un tableau commencent à 0. 
//    Si on a 5 éléments, le dernier est à la position 4.
//    Pourquoi s'arrêter à 1 ? Parce qu'une fois qu'on a trié tous les éléments sauf un, 
//    ce dernier est forcément à sa place.
// 4. À l'intérieur de la première répétition, on va faire une deuxième répétition. 
//    La variable 'j' va partir de 0 et aller jusqu'à i-1.
//    Exemple : si i=4, alors j va prendre les valeurs 0, 1, 2, 3
//    Pourquoi jusqu'à i-1 ? Parce que 'i' représente la limite de la zone qu'on doit encore trier. 
//    Les éléments après la position 'i' sont déjà bien placés.
// 5. On regarde deux éléments côte à côte dans le tableau : celui à la position j 
//    et celui à la position j+1. Si l'élément de gauche est plus grand que celui de droite...
// 6. ...alors on les échange de place. Le plus grand va à droite, le plus petit va à gauche.
// 7. On termine la vérification (le 'si').
// 8. On termine la deuxième répétition (celle de j). On a fini de comparer tous les éléments
//    voisins pour ce passage.
// 9. On termine la première répétition (celle de i). On a fini tous les 
//    passages nécessaires pour trier le tableau.
// 10.La recette est terminée. Le tableau est maintenant trié.
//----------------------------------------------------------------------------------------------//
// Étape 3 : Quick
// Écris l'algorithme du tri rapide en pseudo-code.
//----------------------------------------------------------------------------------------------//
// 1:  procedure tri_rapide(tableau)
// 2:  N ← longueur(tableau)
// 3:   si N > 1 alors
// 4:       pivot ← tableau[N − 1]
// 5:       tableau inf, tableau sup ← partitionner(tableau)
// 6:       tableau trie ← concaténer tri_rapide(tableau inf), pivot et tri_rapide(tableau sup)
// 7:       retourner tableau trie
// 8:   sinon
// 9:       retourner tableau
// 10:  fin si
// 11: fin procedure
//----------------------------------------------------------------------------------------------//
// En français
//----------------------------------------------------------------------------------------------//
// 1.     On crée une recette appelée 'tri_rapide' qui prend un tableau en entrée.
// 2.     On compte combien il y a d'éléments dans le tableau et on stocke ce nombre dans N.
// 3.     On vérifie si le tableau contient plus d'un élément.
//        Si le tableau est vide ou n'a qu'un seul élément, il est déjà trié.
//        Pas besoin de faire quoi que ce soit.
// 4.     On choisit le dernier élément du tableau comme 'pivot' (notre point de référence).
//        Le pivot est l'élément qu'on va utiliser pour séparer le tableau en deux groupes.
// 5.     On sépare le tableau en deux nouveaux tableaux :
//        T inf (tableau inférieur) : tous les éléments plus petits que le pivot
//        T sup (tableau supérieur) : tous les éléments plus grands que le pivot
//        "partitionner" est une autre procédure (une sous-recette) qui fait ce travail de séparation.
// 6.     On crée le tableau trié final en assemblant trois morceaux dans l'ordre :
//        1 : tri_rapide(T inf) : on retrie le tableau inférieur (appel récursif)
//        2 : pivot : le pivot lui-même
//        3 : tri_rapide(T sup) : on retrie le tableau supérieur (appel récursif)
//        Important : tri_rapide s'appelle elle-même. Principe de récursivité. 
//        La fonction se divise en problèmes plus petits jusqu'à ce qu'ils deviennent triviaux 
//        (tableaux de 0 ou 1 élément).
// 7.     On renvoie le tableau maintenant trié.
// 8/9.   Si le tableau avait 0 ou 1 élément (condition du 'si' était fausse), 
//        on le renvoie tel quel car il est déjà trié.
// 10/11. On termine la vérification et la procédure.
//----------------------------------------------------------------------------------------------//
//  Visualisation complète : Tri de [8, 3, 1, 9, 5]
//
//                    [8, 3, 1, 9, 5]
//                           ↓
//                     pivot = 5
//                           ↓
//               ┌───────────┴───────────┐
//               ↓                       ↓
//          [3, 1]                     [8, 9]
//       (< 5)                        (> 5)
//               ↓                       ↓
//          pivot=1                  pivot=9
//               ↓                       ↓
//         ┌─────┴─────┐           ┌─────┴─────┐
//         ↓           ↓           ↓           ↓
//        []          [3]         [8]          []
//     (< 1)        (> 1)       (< 9)        (> 9)
//         ↓           ↓           ↓           ↓
//     déjà trié   déjà trié   déjà trié   déjà trié

// Remontée (reconstruction) :
//     [] + [1] + [3] = [1, 3]
//     [8] + [9] + [] = [8, 9]
//     [1, 3] + [5] + [8, 9] = [1, 3, 5, 8, 9]
//----------------------------------------------------------------------------------------------//
// Étape 4.1 : Bubble sort en JS
//----------------------------------------------------------------------------------------------//

// function bubbleSort(array) {
//     const n = array.length;
//     let swap;
//     for(let i = 0; i < n - 1; i++) {
//         swap = false;
//         for(let j = 0; j < n - i - 1; j++) {
//             if(array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//                 swap = true;
//             }
//         }
//         if (!swap) {
//             break;
//         }
//     }
//     return array;
// };

// console.log(bubbleSort([3,5,7,9,0,4]))

//----------------------------------------------------------------------------------------------//
// Étape 4.2 : Quick sort en JS
//----------------------------------------------------------------------------------------------//

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 5, 7, 9, 0, 4]));

//----------------------------------------------------------------------------------------------//
// Étape 5 : Critères de comparaison
//----------------------------------------------------------------------------------------------//
// 
// Combien d’étapes sont nécessaires pour faire le tri avec chacun ces deux algorithmes ?
// 
// Tri à bulle : beaucoup d’étapes, car on repasse tout le temps sur toute la liste.
// Pour 6 nombres, il faut faire 15 comparaisons.
// Tri rapide : moins d’étapes, car on coupe la liste en morceaux à chaque fois.
// Pour de petites listes, la différence n’est pas énorme. 
// Mais pour de grandes listes, le tri rapide est bien plus rapide !

// Les autres critères de comparaison de ces deux algos :
//
// 1. Vitesse (Performance)
//      Tri à bulle : très lent pour les grandes listes, car il refait beaucoup de passages.
//      Tri rapide : beaucoup plus rapide, surtout pour les grandes listes.
// 2. Simplicité
//      Tri à bulle : très facile à comprendre et à programmer.
//      Tri rapide : un peu plus compliqué à comprendre (récursivité, notion de pivot).
// 3. Mémoire utilisée
//      Tri à bulle : trie la liste sur place, n’utilise presque pas de mémoire en plus.
//      Tri rapide : la version simple (comme celle-ci) crée de nouveaux tableaux 
//      à chaque étape, donc utilise plus de mémoire.
// 4. Stabilité
//      Tri à bulle : stable (deux éléments égaux gardent leur ordre d’origine).
//      Tri rapide : pas toujours stable (l’ordre des éléments égaux peut changer).
// 5. Cas particuliers
//      Tri à bulle : fonctionne bien si la liste est déjà presque triée.
//      Tri rapide : peut être lent si on choisit mal le pivot (mais reste très bon en général).
// 6. Utilisation réelle
//      Tri à bulle : utilisé surtout pour l’apprentissage, rarement en vrai.
//      Tri rapide : utilisé dans de nombreux logiciels et langages pour trier rapidement de grandes listes.

// Résumé :
// Le tri à bulle est simple mais lent.
// Le tri rapide est plus complexe mais très efficace et utilisé en pratique.

//----------------------------------------------------------------------------------------------//
// Étape 6 
//----------------------------------------------------------------------------------------------//
// Quel est le tri le plus efficace pour :

// Les données A :
//  Quick Sort car même sur une petite liste, le tri rapide fait moins d’étapes en moyenne que le tri à bulle, 
//  car il coupe la liste en morceaux et trie chaque morceau rapidement.

// Les données B :
// Bubble Sort car si la liste est déjà triée, le tri à bulle s’arrête tout de suite (il voit qu’il n’y a rien à échanger). 
// Le tri rapide, lui, va quand même faire ses découpages et appels, donc il fait plus d’étapes que nécessaire.

// Les données C :
// Quick Sort car le tri rapide est conçu pour être très rapide sur de grandes listes mélangées. 
// Le tri à bulle serait extrêmement lent, car il doit repasser sur toute la liste de nombreuses fois.

// Les données D :
// Bubble Sort (si on utilise la version qui s’arrête quand tout est déjà trié)
// Sinon, Quick Sort, selon la façon dont il choisit le pivot, peut parfois faire plus d’étapes 
// sur une liste déjà triée, mais il reste rapide dans la plupart des cas.

