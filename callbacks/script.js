console.log("1");
setTimeout(()=>{
    console.log("2");
}, 0)
console.log("3");


let names = ["rango", "humble", "john", "smith"];

names.forEach((name)=> console.log(name));


const MyForEach = (names, CallBackFn) => {
    for(let i= 0; i < names.length; i++){
        CallBackFn(names[i]);
    }
}

MyForEach(names, (name) => {
    console.log(name);
})


const LoadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => cb(data))
}

LoadPokemon(20, (pokemon)=> {
    console.log(pokemon);
})