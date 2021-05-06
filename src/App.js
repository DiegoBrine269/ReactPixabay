import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
      
    //Leer state de pag actual
    let pagina = this.state.pagina;

    if(pagina === 1)
    return

    //Incrementar
    pagina--;

    //Actualizar state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    console.log(pagina);
  }

  paginaSiguiente = () => {

    //Leer state de pag actual
    let pagina = this.state.pagina;

    //Incrementar
    pagina++;

    //Actualizar state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    console.log(pagina);
  }

  consultarApi = () => {
    const pagina = this.state.pagina;
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=21484076-9002515e762aa8701ef890373&q=${termino}&per_page=30&page=${pagina}`;

    fetch (url)
      .then( respuesta => respuesta.json() )
      .then( resultado => this.setState({imagenes:resultado.hits}) )
  }

  /*Con una función pasamos datos del hijo al padre*/
  datosBusqueda = (termino)=> {
    this.setState({
      termino : termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }
  
  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
  
          <Buscador 
            datosBusqueda = {this.datosBusqueda}
          />
        </div>

        <div className="row justify-content-center">
          <Resultado 
            imagenes = {this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }

}

export default App;
