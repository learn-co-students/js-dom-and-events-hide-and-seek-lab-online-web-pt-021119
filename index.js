function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i in lis) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
  return lis;
}

function deepestChild(){
  const divs = document.getElementById('grand-node').querySelectorAll('div');

  const divArr = [];

  for (let i = 0; i < divs.length; i++) {
    divArr.push(divs[i]);
  }

  return divArr[divArr.length - 1];
}