function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rankedLists.length; i++) {
    let element = rankedLists[i]
    element.innerText = (parseInt(element.innerText) + n )
  }
}
