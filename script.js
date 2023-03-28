let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let main_title = document.querySelector('#main-title');
  //let heading = document.getElementById('main-title');
  //heading.textContent = 'New Heading!';
   document.getElementById('main-title').innerHTML = 'Welcome to the DOM Toretto page!';

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = 'light-gray';

  // Part 3
  //let favoritList = document.getElementById('favorite-things');
  //let child = document.getElementById("favorite-things").lastChild.innerHTML;
  const last_li = document.querySelector("#favorite-things li:last-child");
  //console.log(last_li)
  last_li.parentElement.removeChild(last_li);

  // Part 4
  let titles = document.getElementsByClassName('special-title');
  for (title of titles){
    title.style.fontSize = '2rem';
  }

  // Part 5
  let racesList = document.getElementById('past-races');
  let liItems = racesList.getElementsByTagName("li");
  for (var i = 0; i < liItems.length; ++i) {
    if (liItems[i].firstChild.data === "Chicago"){
      racesList.removeChild(liItems[i]);
    }
  }

  // Part 6
  let node = document.createElement('li');
  let textnode = document.createTextNode("Seattle");
  node.appendChild(textnode);
  racesList.appendChild(node);

  // Part 7
  let mainDiv= document.querySelector(".main");

  let blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');
  blogPost.classList.add('purple');
  let blogHeader = document.createElement('h1');
  blogHeader.textContent = 'Seattle';
  let blogParagraph = document.createElement('p');
  blogParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dignissimos at vel assumenda quaerat' 
  blogPost.appendChild(blogHeader);
  blogPost.appendChild(blogParagraph);

  //document.getElementsByClassName('main').appendChild(blogPost)
  //const firstBlog = document.querySelector(".blog-post");

  mainDiv.insertBefore(blogPost, document.querySelector(".blog-post"));
  

  // Part 8
  document.getElementById('quote-title').addEventListener('click', randomQuote);

  // Part 9
  let blogPostList = document.querySelectorAll(".blog-post");
  for (let i=0; i<blogPostList.length; i++){
    blogPostList[i].addEventListener('mouseenter', (event) => {
      blogPostList[i].classList.add('red');
    } );
    blogPostList[i].addEventListener('mouseout', (event) => {
      blogPostList[i].classList.remove('red');
    } );
  }
});
