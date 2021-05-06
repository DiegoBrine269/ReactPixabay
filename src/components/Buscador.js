import React, { Component } from 'react';

class Buscador extends Component {

    /* ref - Para ller los inputs del HTML*/
    busquedaRef = React.createRef();
    
    /* función */
    obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor del input y lo mandamos a App
        const termino = this.busquedaRef.current.value;
        console.log(termino);
        this.props.datosBusqueda(termino);

    }

    /* Con props le pasamos datos del padre al hijo */
    render(){
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">

                    <div className="form-group col-md-8">
                        <input 
                            ref={this.busquedaRef}
                            type="text" 
                            className="form-control form-control-lg"
                            placeholder="Busca tu imagen. Ejemplo: Futbol"
                        />
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
         );
    }
}

export default Buscador;