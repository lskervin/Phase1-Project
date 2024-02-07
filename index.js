document.addEventListener("DOMContentLoaded", (event) => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // duckImages(data);
      });
  });
  
//   function duckImages(images) {
//     const duckDisplayContainer = document.querySelector("#duck-nav");
//     images.forEach((imageUrl) => {
//       let img = document.createElement("img");
//       img.src = imageUrl.img_url;
//       duckDisplayContainer.append(img);

//       img.addEventListener('click',() =>{
//         let div = document.querySelector("#duck-display")
//         let h2 = document.querySelector('h2')
//         h2.textContent = imageUrl.name;
//         let displayImage = div.querySelector('img')
//         displayImage.src = imageUrl.img_url;
//         let like = document.querySelector('button')
//         like.textContent = `${imageUrl.likes} likes`

//         like.addEventListener('click',() => {
//             like.textContent = `${++imageUrl.likes} likes`
//             fetch(`http://localhost:3000/ducks/${imageUrl.id}`, {
//                 method: "PATCH",
//                 headers: {
//                   "content-type": "application/json",
//                 },
//                 body: JSON.stringify({likes: imageUrl.likes}),
//               })
//               .then((res) => {
//                 if (res.status === 201) {
//                   return res.json();
//                 }
//               })
//               .then((data) => {
//               });
//         })
//       })    

//     });
//   };

// let newDuckForm = document.querySelector("#new-duck-form")


// const handleSubmit = (e) => {

//     let newDuck = {
//         name: e.target[0].value,
//         img_url: e.target[1].value,
//         likes: 0
//     }
//     fetch("http://localhost:3000/ducks", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(newDuck),
//   })
//   .then((res) => {
//     if (res.status === 201) {
//       return res.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   });

  
// };

// newDuckForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     handleSubmit(e)
//     fetch("http://localhost:3000/ducks")
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         duckImages(data);
//       });
//   })

    

