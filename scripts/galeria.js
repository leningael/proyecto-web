const dog = {
    "img": "https://images.pexels.com/photos/8863636/pexels-photo-8863636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "especie": "Perro",
    "nombre": "Doki",
    "tamano": "grande"
};
const cat = {
    "img": "https://images.pexels.com/photos/4897323/pexels-photo-4897323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "especie": "Gato",
    "nombre": "Misho",
    "tamano": "chico"
};
const turtle = {
    "img": "https://images.pexels.com/photos/7053881/pexels-photo-7053881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "especie": "Perro",
    "nombre": "Rafael",
    "tamano": "chico"
};


window.addEventListener('load',() =>{
    const principalGrid = document.getElementById("grid");
    addAnimals(principalGrid);
    const grid = new Muuri('.grid', {
        layout: {
            rounding: false
        }
    });
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add('imagenes-cargadas');

    //Filtrado por barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento)=>{
        const busqueda = evento.target.value;
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(busqueda.toLowerCase()));
    })
})

addAnimals = function(cont){
    const animalesLista = [];
    animalesLista.push(dog);
    animalesLista.push(cat);
    animalesLista.push(turtle);
    console.log(`${animalesLista[0]["nombre"]}`);

    animalesLista.forEach(animal => {
        const divAnimal = document.createElement("div");
        const divContent = document.createElement("div");
        const animalImg = document.createElement("img");
        const animalSpecie = document.createElement("p");
        const animalName = document.createElement("p");
        let etiquetas = `${animal["especie"]} ${animal["tamano"]}`;
        etiquetas = etiquetas.toLowerCase();
        divAnimal.className = "item";
        divContent.className = "item-contenido";
        divAnimal.setAttribute("data-etiquetas",etiquetas);
        animalImg.src = `${animal["img"]}`;
        animalSpecie.innerHTML = `Especie: ${animal["especie"]}`;
        animalName.innerHTML = `Nombre: ${animal["nombre"]}`;
        divContent.appendChild(animalImg);
        divContent.appendChild(animalSpecie);
        divContent.appendChild(animalName);
        divAnimal.appendChild(divContent)
        cont.appendChild(divAnimal);
    });
}