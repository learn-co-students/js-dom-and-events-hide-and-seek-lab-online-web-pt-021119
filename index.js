function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("main #nested .target");
}

function increaseRankBy(n) {
  let rankedLis = document.querySelectorAll("ul.ranked-list li");

  for (let i = 0; i < rankedLis.length; i++) {
    rankedLis[i].innerHTML = (parseInt(rankedLis[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  let parentNode = document.querySelector("div#grand-node");
  let childNode = parentNode.children[0];

  while (childNode) {
    parentNode = childNode;
    childNode = parentNode.children[0];
  }

  return parentNode;
}
