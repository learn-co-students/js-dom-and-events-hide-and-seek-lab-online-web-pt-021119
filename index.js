import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.getElementById('nested').querySelector('.target') 
}

function deepestChild(){
    let node = document.querySelector('#grand-node');
    while (node.querySelector('div')) {
        node = node.querySelector('div')
    }
    return node
}

function increaseRankBy(b) {
    const list = document.querySelectorAll('.ranked-list');
    for (let i = 0; i < list.length; i++) {
        let children = list[i].children;
        for (let n = 0; n < children.length; n++) {
            children[n].innerHTML = parseInt(children[n].innerHTML) + b
        }
    }
}