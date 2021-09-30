import React from 'react'

const Titulo = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <span className="navbar-brand">
                <img src="cinema.png" alt="Logo" style={{width:'4%'}} className='mx-3'/>
                Controle Pessoal de Filmes
            </span>
        </nav>
    )
}

export default Titulo;