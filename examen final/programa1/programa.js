//declaramos los elementos que usaremos para interacturar//
const departmentImage = document.getElementById('departmentImage');
const departmentDetails = document.getElementById('departmentDetails');
const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('siguiente');


//arreglo para introducir imagenes y texto//
const departments = [
    { image: 'img/1.jpg', details: 'construye: casabonita.SA',hola: "precio: s/.400,000", area: "area: 120.40 m2", contador:"ultima imagen: 10/10" },

    { image: 'img/2.jpg', details:'construye: losPortales.SA',hola: "precio: s/.400,000", area: "area: 130.40 m2", contador:" imagen: 1/10"  },

    { image: 'img/3.jpg', details: 'construye: MiCasaPropia.SA',hola: "precio: s/.220,000", area: "area: 100.20 m2", contador:" imagen: 2/10" },

    { image: 'img/4.png', details:'construye: graña y montero.SA',hola: "precio: s/.490,000", area: "area: 120.50 m2", contador:" imagen: 3/10"  },

    { image: 'img/5.jpg', details:'construye: Odebrecht.SA',hola: "precio: s/.670,000", area: "area: 120.40 m2" , contador:" imagen: 4/10" },

    { image: 'img/6.jpg', details:'construye: CasasMarfil.SA',hola: "precio: s/.380,000", area: "area: 150.20 m2", contador:" imagen: 5/10"  },

    { image: 'img/7.jpg', details: 'construye: EdificadoraRocio.SA',hola: "precio: s/.950,000", area: "area: 200.50 m2", contador:" imagen: 6/10" },

    { image: 'img/8.jpg', details:'construye: TuNuevaCasa.SA',hola: "precio: s/.790,000", area: "area: 190.80 m2", contador:" imagen: 7/10" },

    { image: 'img/9.jpg', details: 'construye: Las Lomas.SA',hola: "precio: s/.420,000", area: "area: 150.40 m2", contador:" imagen: 8/10" },

    { image: 'img/10.png', details: 'construye: Virgen de chapi.SA',hola: "precio: s/.530,000", area: "area: 120.40 m2", contador:" imagen: 9/10" },


    // Agrega más departamentos aquí...
];

let currentIndex = 0;

//funcion para mostrar los elementos del arreglo//
function showDepartment(index) {
    const department = departments[index];
    departmentImage.src = department.image;
    departmentDetails.textContent = department.details;
    precio.textContent= department.hola;
    area.textContent=department.area;
    contador.textContent=department.contador;
}



//botones
anterior.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + departments.length) % departments.length;
    showDepartment(currentIndex);
});

siguiente.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % departments.length;
    showDepartment(currentIndex);
});