// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicsContainer = document.querySelector('.topics');


axios.get(`https:lambda-times-backend.herokuapp.com/topics`)
    .then(data => {
      for (let topic of data.data.topics) {
          topicsContainer.appendChild(makeTabs(topic));

      }
    })
    .catch(error => {
      console.log('problem', error);
    })



function makeTabs(name) {
    //make element
    const tab = document.createElement('div');

    //add class
    tab.classList.add('tab');

    //add content
    tab.textContent = name;

    return tab;
}
