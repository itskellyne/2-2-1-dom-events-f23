// a generic event handler
const eventHandler = (event) => console.log(event.target);

// register an event listener on a button
const button = document.querySelector('button');
const mouseArea = document.querySelector('#mouse-area');

// TODO:
// add a 'click' handler for the button
button.addEventListener('click', eventHandler)
// add a 'mousemove' handler for the mouseArea
mouseArea.addEventListener('mousemove', eventHandler)
// add a 'keydown' handler for the entire document
document.body.addEventListener('keydown', eventHandler)