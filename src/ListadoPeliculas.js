import './App.css';
import { PageWrapper } from './PageWrapper';
import { Paginacion } from './Paginacion';
import { Pelicula } from './pelicula';
import { useState, useEffect } from 'react';
//Para adaptar un codigo html a react, algunas cosas basicas que hay que hacer si copiamos y pegamos el codigo html en un componente de React es: cambiar los atributos class por className; cerrar las etiquetas como img, inputs, br (en html son etiquetas que no llevan cierre pero en react lo requieren); borrar los comentarios en html; borrar atributos style
export function ListadoPeliculas() {
	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_POR_PAGINA = 6;
	const [peliculas, setPeliculas] = useState([]);
useEffect(() => {
	buscarPeliculas();
}, []);

	const buscarPeliculas = async ()=>{
		let url = 'https://lucasmoy.dev/data/react/peliculas.json';
		var respuesta = await fetch(url);
		var json = await respuesta.json();
		setPeliculas(json);
	}
	
		const getTotalPaginas = () =>{
		let cantidadTotalDePeliculas = peliculas.length;
		return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
	}

	let peliculasPorPagina = peliculas.slice(
		(paginaActual -1)*TOTAL_POR_PAGINA, (paginaActual*TOTAL_POR_PAGINA));

  return (
   <div>
				<PageWrapper>

					{/* .map recorre el array y ejecuta una funcion por cada elemento del array al igual que forEach, la dif. es que map retorna un nuevo array. 
					En React (dentro del return del componente) para debemos usar el .map xq es el unico metodo que recorre algo y devuelve algo, como en REact tenemos que retornar lo que queremos renderizar es lo mejor que podemos usar. forEach o un bucle for solo recorren.
					Distinto es el caso e si creamos una funcion fuera del return, donde sí podemos escribir js normal, como por ej en el componenete Paginacion, donde usamos en una funcion exterior al return un bucle for que retorna un elemento html*/}
					{peliculasPorPagina.map(pelicula=>
						<Pelicula img={pelicula.img} titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} duracion={pelicula.duracion} fecha={pelicula.fecha}>
      				{pelicula.descripcion}
      				</Pelicula>
					)}
       
					{/* Ésta es otra sintaxis posible: si ponemos llaves si o si hay que especificar el return, sino no hace falta. */}
					{/* {peliculas.map(pelicula=>
							<Pelicula img="images/uploads/mv1.jpg" titulo="Oblivion" calificacion="8.1" director="Joss Whedon" actores="Robert Downey Jr., Chris Evans, Chris Hemsworth" duracion="2h21’" fecha="1 May 2015">
      				Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
      				</Pelicula>
					)}  */} 
      
					<Paginacion pagina ={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
						setPaginaActual(pagina)
					}}/>
        </PageWrapper>

	  </div>
  );
}
