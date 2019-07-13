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
const container = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(data => {
      for (let topic in data.data.articles) {
          for (let item of data.data.articles[topic]) {
            container.appendChild(createCards(item));
          }
      
        }
    })
    .catch(error => {
      console.log('problem', error);
    })

function createCards(articleInfo) {
    // create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const by = document.createElement('span');

    //add classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //add content
    headline.textContent = `${articleInfo.headline}`;
    image.src = `${articleInfo.authorPhoto}`;
    by.textContent = `By ${articleInfo.authorName}`;

    //nest elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(by);
    imgContainer.appendChild(image);

    return card;

}