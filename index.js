const getFirstSelector = selector => document.querySelector(selector);

const nestedTarget = () => document.querySelector("#nested .target")

const increaseRankBy = n => {
  let list = document.querySelectorAll(".ranked-list li");
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

const deepestChild = () => {
  let bigNode = document.getElementById('grand-node');
  for (let i = 0; i <= bigNode.childNodes.length; i++) {
    bigNode = bigNode.firstElementChild;
  }
  return bigNode;
}