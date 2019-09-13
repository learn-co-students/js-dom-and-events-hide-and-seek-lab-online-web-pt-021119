function getFirstSelector(selector){return document
  .querySelector(selector);
}

function nestedTarget(){return document
  .getElementById('nested')
  .querySelector('.target');
}

function deepestChild(){
  let a="#grand-node";
  let b=" div"
  let b2=""
  while (document.querySelector(a + b2) !== null){
    b2 = b2 + b;
    if (document.querySelector(a + b2) === null){
      b2 = b2.slice(4);
      return document.querySelector(a + b2);
    }
  }
}

function increaseRankBy(n){
  const rlist = document.querySelectorAll(".ranked-list");
  for (let i=0; i<rlist.length; i++){
    const lis = rlist[i].querySelectorAll("li");
    for (let j=0; j<lis.length; j++){
      lis[j].innerHTML = (parseInt(lis[j].innerHTML)+n).toString();
    }
  }
}
