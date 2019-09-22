function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for(let i in lis) { 
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    }

    return lis;

  }

function deepestChild() {
    let divs = document.getElementById('grand-node').querySelector('div');
    console.log(divs)
    while (divs.children.length) {
        divs = divs.children[0]
    }

    return divs;
    
}   