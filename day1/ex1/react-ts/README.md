## Exercice : Component `Greeting` (en TypeScript bien évidemment)

### Objectif
Créer un petit component React nommé `Greeting` qui :
1. Prend en prop obligatoire `name` (type `string`).
2. Prend en prop optionnelle `age` (type `number`).

Si `age` est fourni, le component l’affiche ; sinon, il ne l’affiche pas.

### Étapes à suivre

1. **Créer un fichier** `Greeting.tsx` dans le dossier de votre choix.
2. **Définir l’interface** ou le type des props
3. **Implémenter le component**
4. **Utiliser ce component** dans votre `App.tsx` (ou autre component parent)
5. **Vérifier** que le component s’affiche correctement sur la page.  
   - Si vous essayez de passer un autre type que `string` à `name` (par ex. `name={123}`), TypeScript doit signaler une erreur.  
   - Si vous passez une `age` qui n’est pas un `number`, TypeScript signale là aussi une erreur.

### Pour aller plus loin (optionnel)
- Ajouter une vérification pour afficher un message si `age` est trop bas ou trop élevé (ça ne se fait pas dans le typage TypeScript, mais dans la logique du component).
- Faire un component similaire pour s’habituer à passer d’autres types (par ex. un tableau de strings, un booléen…).