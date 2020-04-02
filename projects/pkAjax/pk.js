
const poke = {
    name: "",
    abilities: [],
    sprites: "",
    spriteShiny: "",
    types: []
}

function implant(pk) {
    poke.name = pk.name;
    for (let i = 0; i < pk.abilities.length; i++) {
        poke.abilities.push(pk.abilities[i].ability.name);
    }
    poke.spriteShiny = pk.sprites.front_shiny;
    poke.sprites = pk.sprites.front_default;
    for (let i = 0; i < pk.types.length; i++) {
        poke.types.push(pk.types[i].type.name);
    }
    console.log(pk);
    document.getElementById('nameList').innerHTML =
        poke.name.charAt(0).toUpperCase() +
        poke.name.substr(1, poke.name.length);
    let typesName = poke.types.pop();
    if (poke.types[0]) {
        typesName += " / " + poke.types.pop();
    }
    document.getElementById('typeList').innerHTML =
        typesName;
    document.getElementById('pimg').src = poke.sprites;
    document.getElementById('pimg1').src = poke.spriteShiny;
    let abilityString = "";
    for (let i = 0; i <= poke.abilities.length + 1; i++) {
        if (poke.abilities[0]) {
            abilityString += "[" + poke.abilities.pop() + "]";
        }
    }
    document.getElementById('abilityList').innerHTML = abilityString;
}
document.getElementById('pksubmit').addEventListener('click', getPk);
function getPk() {
    const pkid = document.getElementById('pkid').value;
    fetch('https://pokeapi.co/api/v2/pokemon/' + pkid)
        .then(response => response.json())
        .then(json => implant(json));
}

