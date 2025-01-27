## **Exercice pratique : Gérer une liste d’articles en TypeScript**

### Objectif
Créer une **petite application** (sans toute la complexité d’un CRUD complet) pour :
1. **Récupérer** une liste d’articles (ou "posts") depuis un endpoint.  
2. **Afficher** ces articles (typage des données).  
3. Permettre à l’utilisateur de **liker** un article (un seul champ à modifier localement, sans mise à jour sur l’API).

Cet exercice se concentre sur :
- **Le typage** des données récupérées.
- **Le typage** des callbacks (clic pour "liker").
- L’utilisation de `useState`, `useEffect`, et un **appel HTTP** simple pour bien pratiquer TypeScript + React.

---

### Consignes

1. **Créer un type ou une interface** pour décrire les articles (par exemple, `IArticle` avec `id`, `title`, `body`, etc.).  
2. **Faire un appel HTTP** (via `fetch` ou `axios`) pour récupérer ces articles. Par exemple, depuis [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) (on en récupère 10 seulement, `?limit=10`).  
3. **Stocker** le résultat dans un `useState<IArticle[]>([])`.  
4. **Afficher** la liste d’articles.  
5. **Ajouter** une fonctionnalité "Like" :  
   - Soit en ajoutant un champ `liked: boolean` pour chacun.  
   - Soit en ajoutant un `likeCount: number` et un bouton "Like" qui l’incrémente localement.  

---

Cet exercice vous permet de pratiquer les notions suivantes :

1. **Typage** des réponses d’API avec **TypeScript**.  
2. **Gestion d’état** et mise à jour d’un tableau d’objets dans **React**.  
3. **Callbacks** (le bouton "Like") bien typés : `onClick={() => handleLike(article.id)}`.  
4. **`useEffect`** pour lancer la requête au montage du composant.  