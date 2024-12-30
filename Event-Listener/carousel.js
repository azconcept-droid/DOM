let width = 130; 
let count = 3; 

let list = document.querySelector('ul');
let listElems = document.querySelectorAll('li');
let carousel_prev = document.querySelector('.prev');
let carousel_next = document.querySelector('.next');
let position = 0;

carousel_prev.addEventListener('click', () => {
  position += width * count;
  position = minPosition(position, 0);
  list.style.marginLeft = position + 'px';
})

function minPosition(a, b){
  if(a > b) {
    return b;
  } else {
    return a;
  }
}

carousel_next.addEventListener('click', () => {
  position -= width * count; 
  position = maxPosition(position, - width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
})

function maxPosition(x, y){
  if (x > y) return x;

  if (y > x) return y;
}
