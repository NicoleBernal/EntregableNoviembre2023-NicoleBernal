import React,  { useState } from "react";
import Card from './Card'
const Formulario=()=>{

    const [genero,setGenero]=useState("")
    const [album,setAlbum]=useState("")
    const [artista,setArtista]=useState("")
    const [submitted,setSubmitted]=useState(false)


const handleSubmit=e=>{
    e.preventDefault()
    if (genero.length < 3 || genero[0] === ' ' || album.length < 6) {
        document.getElementById('mensaje').innerHTML='Por favor chequea que la información sea correcta';
        setSubmitted(false);
      } else {
        document.getElementById('mensaje').innerHTML=' ';
        setSubmitted(true);
      }
}

return(
    <>
    <div className="App">
        <h2> Ingresa tus gustos musicales</h2>
        <form 
            onSubmit={handleSubmit}
        >
            <label htmlFor=""> 
                Genero Musical:  
            </label>
            <input 
                type="text" 
                placeholder='Ingresar Genero Musical'
                value={genero}
                onChange={e =>setGenero(e.target.value)}
            />
            <label htmlFor="">
                Album Favorito: 
            </label>
            <input 
                type="text" 
                placeholder='Ingresar Album de su gusto'
                value={album}
                onChange={e =>setAlbum(e.target.value)}
            />
            <label htmlFor="">
                Artista que sigues:
            </label>
            <input 
                type="text"
                placeholder='Ingresar el nombre del artista'
                value={artista}
                onChange={e =>setArtista(e.target.value)}
            />
            <input 
                type="submit"
 
            />
        </form>
        {submitted && <Card genero={genero} album={album} artista={artista}/>  }
    </div>
    <section id='mensaje'>

    </section>
    </>
    )
}
export default Formulario