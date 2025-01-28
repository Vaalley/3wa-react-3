# **Exercice : Découvrir Zustand avec un mini-store**

Dans cet exercice, vous allez **créer un store Zustand** pour gérer l'état global d'une application **basique**, puis l'utiliser dans vos composants (Atoms, Molecules, Organisms…). L'objectif est de comprendre :

1. **Comment** on définit un store (état, actions) avec Zustand.  
2. **Comment** on s'en sert dans des composants pour lire/mettre à jour l'état.  
3. **Comment** cela s'intègre dans une architecture (Atomic Design + aliases, si vous le souhaitez).

---

## **Sujet**

### **1. Créer un store "Panier" (Cart)**

- **État** : un tableau `cartItems` (id du produit, nom, prix…).  
- **Actions** :  
  - `addItem(item)` : ajoute un produit au panier,  
  - `removeItem(id)` : retire le produit dont l'ID correspond,  
  - `clearCart()` : vide entièrement le panier.

### **2. Créer un composant "ProductList"** (page ou organism) :
- Montre 3–4 produits en dur (ou via un array local).  
- Pour chaque produit, un bouton "Ajouter au panier" qui appelle `addItem(...)`. Si le produit est dans le panier, pouvoir le retirer avec `removeItem(id)`.
- Dans le Header (organism), pour vider complètement le panier avec `clearCart()`

---

## **Architecture suggérée**

```
src/
  ├── store/
  │    └── useCartStore.ts    // votre store Zustand
  ├── components/
  │    ├── atoms/
  │    │    └── CartButton/
  │    │         └── CartButton.tsx
  │    └── pages/
  │         └── ProductListPage.tsx
  ├── App.tsx
  └── main.tsx
```

Si vous voulez utiliser les **aliases**, configurez votre `tsconfig.json` et/ou `vite.config.ts` pour faire en sorte que `@store` pointe vers `src/store`, etc.