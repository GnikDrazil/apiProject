const baseURL = 'https://pokeapi.co/api/v2/pokemon';
    //let item = document.getElementById(`col-${pokedexID}`)
    //item.innerText=pokedexID;
const searchForm = document.querySelector('form');
const spaceShips = document.getElementById('hello')

/*
for (rowNum = 1; rowNum < 51; rowNum++){//create 50 rows
    i = 0
    i===i+1;
    var node = document.createElement("div");
    var new_div = document.createElement('div');
        new_div.className = `row`;
        new_div.id = `row-${rowNum}`; 
    node.appendChild(new_div);
    document.getElementById("hello").appendChild(new_div);

    var node = document.createElement("div");
    var new_div = document.createElement('div');
        new_div.className = `text-center`;
 
        //new_div.id = `row-${rowNum}`; 
    node.appendChild(new_div);
    document.getElementById("hello").appendChild(new_div);
}
*/

//console.log(event); 
pokedexID = 1;
let pkmnAll = [];

function doStuff(event, ne){
    console.log(event)
    event.preventDefault();
    console.log('hi')
do {
    //console.log(`fetchPKMN abt to begin ${pokedexID}`)
    fetchPKMN(pokedexID);
    pokedexID ++;
        console.log(pokedexID)
}
while (pokedexID<151);

}

//submit button stuff
const imageUl = document.getElementById("images")
searchForm.addEventListener('submit', doStuff); // function reference - funciton is not being invoked on this line, we only want the function to run when the submi
function fetchPKMN(pokeId){
    console.log('fetchPKMN running')
    // Purpose, to fetch a single pokemon
    //console.log('fetchAPI is running now')
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)// fetch starts the process of fetching from a netwerok, and that fetch will return a promise which is fulfilled (or rejected)
        .then(responseObj => responseObj.json()) // .then(function(responseObj) {})
        .then(jsonData => {
            console.log('promise fulfilled');
            //console.log(jsonData);
            pkmnAll.push(jsonData);
            //console.log('I just pushed jsonData')
            //newElement(pokedexID);
            //doStuff(jsonData)
            console.log(pkmnAll)
            console.log(`abt to run if-else ${pokedexID}`)
            displayPokemon(jsonData)
            console.log('fetchPKMN DONE ----------------')
        })
    
}

function displayPokemon(pokemon) {
    console.log('displayPKMN is running')
    displayNum = 1

    var node = document.createElement("div");
    var new_div = document.createElement('div');
    new_div.className = `col-sm-4`;
    //new_div.id = `col-${pokedexID}`; 
    node.appendChild(new_div);
    
    var pokemonSprite = document.createElement('img');
    pokemonSprite.className = `h3`;
    pokemonSprite.src = `${pokemon.sprites.front_default}`; 
    //new_div1.innerText = pokemon.name

    //var node1 = document.createElement("h3");
    var new_div1 = document.createElement('h3');
    new_div1.className = `h3`;
    new_div1.id = `h3-${pokedexID}`; 
    new_div1.style = "text-transform:capitalize;"
    new_div1.innerText = pokemon.name
    console.log(pokedexID)
    
    new_div.appendChild(new_div1);
    new_div.appendChild(pokemonSprite)
    document.getElementById(`hello`).appendChild(new_div);
    console.log('displayPKMN is done')      
}






/*
function newElement(pokemon_data){
    console.log('newElement is running')
    rowNum = Math.ceil(pokedexID/3)

    var node = document.createElement("div");
    var new_div = document.createElement('div');
    new_div.className = `col`;
    new_div.id = `col-${pokedexID}`; 
    node.appendChild(new_div);
    document.getElementById(`row-${rowNum}`).appendChild(new_div);

    //var node1 = document.createElement("h3");
    var new_div1 = document.createElement('h3');
    new_div1.className = `h3`;
    new_div1.id = `h3-${pokedexID}`; 
    new_div1.innerText = pokemon_data.name
    console.log(pokedexID)
    document.getElementById(`col-${pokedexID}`).appendChild(new_div1);

}      
*/
/*
    Procedure:
        1) Fetch a pokemon
        2) Create the elements for that pokemon
        3) Attach that pokemon data to the elemnts
        4) Append those elements to the view
*/

/* JUNK CODE


    // var new_div2 = document.createElement('p');
    // new_div2.className = ``;
    // new_div2.id = `p-${pokedexID}`;
    // new_div2.innerText = pokemon_data.
    // document.getElementById(`col-${pokedexID}`).appendChild(new_div2);
    //console.log(pokedexID)
    //console.log('new element is done')

//     do{
//     newElement();
//     console.log(pokedexID)
//     console.log(pkmnAll)
//     //console.log(json);
//     let item = document.getElementById(`col-${displayNum}`)
//     displayNum = displayNum -1;
//     console.log(item)
//     console.log(pkmnAll[displayNum]);
//    // item.innerText = `${pkmnAll[displayNum].name}`;
//     document.getElementById(`p-${displayNum}`).innerText = pkmnAll[displayNum].name 
//     displayNum ++;
//     displayNum ++;
//     }
// while(displayNum<10)
//ÍspaceShips.appendChild(item);
//console.log(item)

            // if (pokedexID=10){
            //     console.log('display pokemon running...........')
            //     displayPokemon(pkmnAll)
            //     console.log('display pokemon ran')
            // }
            // else{
            //     console.log(`re-running do-while loop, display pokemon did not run, DEXID = ${pokedexID}`)
            // }
*/