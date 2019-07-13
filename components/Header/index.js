// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


const headerContainerDOM = document.querySelector('.header-container');

function Header() {
    // create elements
    const container = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // add classes
    container.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // add content
    date.textContent = 'March 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    // nest elements
    container.appendChild(date);
    container.appendChild(title);
    container.appendChild(temp);

    return container;

}

headerContainerDOM.appendChild(Header());