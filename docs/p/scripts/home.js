export function script(){
    console.log("home.js is loaded");

    var elements = document.getElementsByClassName("carousel-item");

    let divs = [];
    for(let elem of elements){
        divs.push(elem.children[0]);
    };

    let divHeights = divs.map(div => div.style.height);

    return [divHeights, divs]
}