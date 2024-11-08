//explore dataset
console.log(stateData.ny);
// {
//     name: 'New York',
//     abbr: 'NY',
//     capitol: 'Albany',
//     pop: '19,651,127',
//     statehood: '1788',
//     mammal: 'Beaver',
//     bird: 'Bluebird',
//     tree: 'Sugar Maple',
//     flower: 'Rose',
//     nickname: 'Empire State'
// }

//get just one piece of ny data:
console.log(stateData.ny.tree); //Sugar Maple

//get select menu
let selectedMenu = document.getElementById('state-list');
//get value of select menu (state abbr)
console.log(selectedMenu.value); //tx
//get the current selected state from the dataset:

//get the current selected state from the dataset
// ?? ??? ???
console.log(stateData[selectedMenu.value]);

let selectedState = stateData[selectedMenu.value];

// console.log(selectedState.bird);
// console.log(selectedState.mammal);
// console.log(selectedState.flower);
// console.log(selectedState.tree);
console.log(selectedState)

console.log(selectedMenu.options.length);

selectedMenu.addEventListener('change', displayStateInfo);

let infoAbbrP = document.getElementById('info-abbr');
let infoCapitolP = document.getElementById('info-capitol');
let infoPopulationP = document.getElementById('info-population');
let infoStateHoodlP = document.getElementById('info-statehood');
let infoNicknameP = document.getElementById('info-nickname');
let infoMammalP = document.getElementById('info-mammal');
let infoBirdP = document.getElementById('info-bird');
let infoFlowerP = document.getElementById('info-flower');
let infoTreeP = document.getElementById('info-tree');


//output the selected state data to their respective p tags


//challenge: get the other places of data to appear on the webpage for the selected state
//bonus: get the jpg image of the state to also appear
console.log(infoPopulationP.textContent);
console.log(selectedState.pop);

function displayStateInfo() {
    let selectedState = stateData[this.value];
    infoAbbrP.textContent = selectedState.abbr;
    infoCapitolP.textContent = selectedState.capitol;
    infoPopulationP.textContent = selectedState.pop;
    infoStateHoodlP.textContent = selectedState.statehood;
    infoNicknameP.textContent = selectedState.nickname;
    infoBirdP.textContent = selectedState.bird;
    infoFlowerP.textContent = selectedState.flower;
    infoTreeP.textContent = selectedState.tree;
    infoPic.src = 'img' + selectedState + '.jpg';
    infoNameFigCap.textContent = selectedState.name;

}










