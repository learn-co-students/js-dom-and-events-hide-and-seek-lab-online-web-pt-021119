function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.querySelector('#nested .target')
}

function increaseRankBy(n){
	const items = document.querySelectorAll('.ranked-list li')
	for (const item of items) {
		debugger
		item.textContent = Number(item.textContent) + n
	}
}
function deepestChild(){
	const node = document.querySelector('#grand-node')
	const nestedDivs = node.querySelectorAll('div')
	return nestedDivs[nestedDivs.length-1]
}
