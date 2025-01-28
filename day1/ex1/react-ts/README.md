# **Exercice : Intégrer TanStack Query dans un mini-projet**

Dans cet exercice, vous allez  **intégrer** TanStack Query pour :

1. **Récupérer** une liste d’items depuis une API (ex. JSONPlaceholder).  
2. Gérer **l’état de chargement** (loading) et **l’état d’erreur** (error).  
3. **Mettre à jour** un élément (par ex. un toggle "like") via `useMutation`, puis **invalider** la requête pour rafraîchir la liste.

> **But** : Découvrir concrètement comment utiliser `useQuery` et `useMutation` dans une architecture simple, en respectant des principes **clairs** (Atomic Design, dossiers bien structurés).

---

## **Étapes**

### **1. Mise en place du projet**

1. **Repartir** d'un projet React + TypeScript (via Vite, par exemple). On va pas créer un projet React à chaque exo, hein ? 😅 
2. **Installer** TanStack Query :  
   ```bash
   npm install @tanstack/react-query
   ```
3. **Instancier** un `QueryClient` et entourer votre `<App />` avec `<QueryClientProvider client={queryClient}>` dans `main.tsx` ou `App.tsx`.

### **2. Architecture (inspirée d’Atomic Design)**

Vous pouvez, par exemple, structurer votre code ainsi :

```
src/
  ├── api/
  │    └── itemsApi.ts         // Fonctions axios/fetch
  ├── components/
  │    ├── atoms/
  │    │    └── ...            // ex. Button.tsx (un atome)
  │    ├── molecules/
  │    │    └── ...            // ex. ItemCard.tsx (molecule)
  │    └── pages/
  │         └── HomePage.tsx   // Page principale
  ├── hooks/
  │    ├── queries.ts          // hooks useItems()
  │    └── mutations.ts        // hooks useLikeItem()
  ├── App.tsx
  └── main.tsx
```

*Vous n’êtes pas obligé d’avoir exactement ça, mais l’idée est de séparer un peu les fichiers.*

### **3. Récupérer la liste d’items avec `useQuery`**

1. **API** (ex. `itemsApi.ts`) :

   ```ts
   import axios from "axios";

   // Par exemple, on récupère des "posts" de JSONPlaceholder
   export const fetchItems = async () => {
     const response = await axios.get("https://jsonplaceholder.typicode.com/posts?limit=5");
     return response.data;
   };
   ```

2. **Hook `useItems()`** (ex. `hooks/queries.ts`) :

   ```ts
   import { useQuery } from "@tanstack/react-query";
   import { fetchItems } from "../api/itemsApi";

   export function useItems() {
     return useQuery({
       queryKey: ["items"],
       queryFn: fetchItems
     });
   }
   ```

### **4. Mettre à jour un élément (ex. toggle "like")**

1. **API** (ex. `itemsApi.ts`) :

   ```ts
   export const likeItem = async (id: number) => {
     // Sur JSONPlaceholder, vous n'aurez pas de vrai effet 
     // car c’est un mock, mais on simule un PUT/PATCH :
     const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
       liked: true
     });
     return response.data;
   };
   ```

2. **Hook `useLikeItem()`** (ex. `hooks/mutations.ts`) qui utilisera `useMutation`, car elle modifie les données déjà récupérées.

---

## **Tâches à réaliser pour valider l’exo**

1. **Installer** TanStack Query et configurer le `QueryClientProvider`.  
2. **Créer** une requête GET (useQuery) pour afficher une liste de données (ex. posts, todos, etc.).  
3. **Gérer** un état "loading" (afficher un texte ou un skeleton).  
4. **Gérer** un état "error" (afficher un message simple).  
5. **Créer** une mutation (useMutation) pour **modifier** un item (toggle like, rename, etc.).  
6. **Invalidate** la requête concernée (`invalidateQueries(["items"])`) après la mutation pour forcer un refetch.  
7. **Afficher** dans l’UI le résultat (ex. un champ "liked: true/false").

**Bonus** :

- Ajouter un petit **formulaire** pour ajouter un item (ex. un nouveau "post"), et invalider la requête ensuite.  
- Mettre des **styles** ou un **squelette** de chargement (Skeleton) pour un rendu plus sympa.  
- Respecter l’organisation "Atomic Design" en créant un "ItemCard" (Molecule), un "LikeButton" (Atom), etc.

---

## **Conclusion**

Cet exercice vous permet de mettre en pratique :

1. **`useQuery`** pour récupérer des données (avec `isLoading`, `isError`, etc.).  
2. **`useMutation`** pour modifier ces données (POST, PATCH, etc.) et **invalider** le cache.  
3. Une petite **structure** de projet plus "propre", inspirée de l’Atomic Design (séparer l’API, les hooks, les composants, etc.).  

**Amusez-vous bien** et n’hésitez pas à personnaliser la fonctionnalité (ex. un champ "completed" à toggler, un bouton "delete", etc.) pour tester votre maîtrise de TanStack Query !