// * SNACK 1
// Crea una funzione getPostTitle(id)
//  che accetta un id e restituisce una Promise
// che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

// function getPostTitle(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((obj) => resolve(obj.title))
//       .catch(reject);
//   });
// }

// getPostTitle(1)
//   .then((title) => console.log(title))
//   .catch((error) => console.log(error));

// BONUS
// Crea una funzione getPost(id) che recupera l'intero post.
//  Concatena una seconda chiamata che aggiunge una proprietà user
// che contiene i dati dell'autore,
//  recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
// function getPost(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((post) => {
//         fetch(`https://dummyjson.com/users/${post.userId}`)
//           .then((response) => response.json())
//           .then((user) => resolve({ ...post, user }))
//           .catch(reject);
//       })
//       .catch(reject);
//   });
// }
// getPost(1)
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

// * SNACK 2
// Crea la funzione lanciaDado() che restituisce una Promise che,
//  dopo 3 secondi, genera un numero casuale tra 1 e 6.
// Tuttavia, nel 20% dei casi, il dado si "incastra"
// e la Promise va in reject.

function lanciaDado() {
  return new Promise((resolve, reject) => {
    console.log(`sto lanciando il dado...`);

    setTimeout(() => {
      const numero = Math.floor(Math.random() * 6) + 1;
      const probabilitaIncastro = Math.random();
      if (probabilitaIncastro < 0.2) {
        reject(`il dado si è incastrato`);
      } else {
        resolve(`è uscito il numero: ${numero}`);
      }
    }, 3000);
  });
}

lanciaDado()
  .then((messaggio) => console.log(messaggio))
  .catch((err) => console.error(err));
