for(let i=0; i<document.getElementsByTagName('*').length; i++) {
  const color = localStorage['color'];
  const element = document.getElementsByTagName('*')[i];
  console.log('color', color);
  element.classList.toggle('borderOn_' + color);
}
