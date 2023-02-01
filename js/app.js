//alert('Hello world');   prueba inicial 
const imagenes = document.querySelectorAll('.propiedad__imagen'); //seleccionando las imagenes del archivo propiedades
//console.log(imagenes);  //para ver las imagenes en consola

window.addEventListener('scroll', () => {
   
   //console.log(imagenes[0]); //seleccionando una imagen
   //console.log(this.scrollY);
   const scroll = this.scrollY / -20;    //ese -20 hacer referencia a -20px

   imagenes.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`;  //comilla invertida con alt + 96

   }
   )

} );