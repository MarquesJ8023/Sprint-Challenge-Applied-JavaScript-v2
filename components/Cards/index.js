// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(request => {
    articleComponent(request);
  }).catch(err => {
    console.log(err);
  });
  
  function articleComponent(promise) {
    const cardsContainer = document.querySelector('.cards-container');
    console.log(promise.data.articles);
    for(const entry in promise.data.articles) {
      const array = promise.data.articles[entry];
      array.forEach(section => {
        const card = document.createElement('div', 'card'),
            headline = document.createElement('div', 'headline', section.headline),
            author = document.createElement('div', 'author'),
            img_container = document.createElement('div', 'img-container'),
            img = document.createElement('img'),
            by = document.createElement('span', `By ${section.authorName}`);
        img_container.appendChild(img);
        img.src = section.authorPhoto;
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(img_container);
        author.appendChild(by);
        cardsContainer.appendChild(card);
      });
    }
  }