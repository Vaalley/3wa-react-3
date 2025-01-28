# **Exercice : Créer un mini-projet en Atomic Design avec aliases**

L’objectif est de **partir de zéro** (supprimez ce qui est déjà existant ou le mettre dans un dossier `legacy` de votre projet React actuel pas besoin de TOUT reinstaller !) et de construire un petit projet React + TypeScript, en **organisant** vos composants selon l’approche Atomic Design et en **utilisant** des aliases pour vos imports.

---

## **Les grandes étapes**

1. **Configurer TypeScript** et mettre en place les **aliases** (via `tsconfig.app.json` et éventuellement `vite-tsconfig-paths`).  
2. **Créer la structure** Atomic Design :  
   - `src/components/atoms`  
   - `src/components/molecules`  
   - `src/components/organisms`  
   - `src/components/pages`
3. **Réaliser** au moins **2 Atoms** (ex. un `Title` et un `Button`), **1 Molecule** (qui réutilise vos Atoms), et **1 Page** (qui affiche le tout).  
4. **Utiliser les aliases** dans les imports (`@atoms/Title`, `@molecules/YourMolecule`, etc.).  

---

## **Exemple de sujet**

**Scénario** : Vous décidez de créer une petite application baptisée "My Pizza App" (ou tout autre thème sympa) avec :

- **Atom `Title`** : juste un composant qui affiche un texte `<h2>`, stylisé.  
- **Atom `Button`** : un bouton basique avec une prop `label`.  
- **Molecule `PizzaCard`** : qui réutilise `Title` pour afficher le nom de la pizza et un `Button` pour commander.  
- **Page `HomePage`** : qui affiche votre `PizzaCard` (pas besoin d’avoir de vraie logique de commande, c’est juste pour la forme).

### **Organisation des dossiers**

```
src/
  ├── components/
  │    ├── atoms/
  │    │    ├── Title/
  │    │    │    └── Title.tsx
  │    │    └── Button/
  │    │         └── Button.tsx
  │    ├── molecules/
  │    │    └── PizzaCard/
  │    │         └── PizzaCard.tsx
  │    └── pages/
  │         └── HomePage.tsx
  ├── App.tsx
  ├── main.tsx
  └── ...
```

Ici, je n'ai pas mit de Barrel Export file ou de fichier css pour simplifier l'exercice. Mais vous pouvez les ajouter si vous le souhaitez ! ;)

### **Mise en place des aliases**

Dans votre `tsconfig.json` (ou un fichier comme `tsconfig.paths.json`), ajoutez :

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@atoms/*": ["components/atoms/*"],
      "@molecules/*": ["components/molecules/*"],
      "@pages/*": ["components/pages/*"]
    }
  }
}
```

**Optionnel** : utilisez le plugin `vite-tsconfig-paths` pour que Vite lise automatiquement ces chemins.

---

## **Bonus possibles**

1. **Styliser davantage** : ajouter un fichier `.css` ou `.module.css` dans chaque composant.  
2. **Ajouter une Molecule** de plus : par exemple une "SearchBar" ou un "CommentBox".  
3. **Organism** : si vous voulez aller plus loin, créez un "Header" ou "Footer" qui réutilise un `Button` ou une `Title`.  
4. **Autres pages** : Ex. "AboutPage", "ContactPage", etc., en suivant la même structure.

---

**Amusez-vous** à personnaliser vos Atoms (buttons de différentes couleurs, etc.) et n’hésitez pas à réutiliser cette structure dans vos projets plus sérieux !