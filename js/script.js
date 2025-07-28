// * SNACK 1
// Crea una funzione getPostTitle(id)
//  che accetta un id e restituisce una Promise
// che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((obj) => resolve(obj))
      .catch(reject);
  });
}

getPostTitle(1)
  .then((obj) => console.log(obj.title))
  .catch((error) => console.log(error));
