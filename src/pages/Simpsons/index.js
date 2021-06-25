import React, { useState, useEffect } from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import Axios from 'axios'
import './styles.css'

const Simpsons = () => {
    const [personagem, setPersonagem] = useState([])

    const pegaDados = async () => {
        const resposta = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        const dados = await resposta.data
        setPersonagem(dados)
    }

    useEffect(() => {
        pegaDados()
    }, [])

    function trocarPersonagem() {
        pegaDados()
    }

    return (
        <>
            <Menu />
            <div className="simpsons">
                {personagem.map((person, index) => {
                    return (
                        <div className="card" key={index}>
                            <h2>{person.character}</h2>
                            <img src={person.image} alt="personagem simpsons" />
                        </div>

                    )
                })}
                <button onClick={trocarPersonagem}>Clique para trocar o personagem</button>
            </div>
            <Footer />
        </>
    )
}

export default Simpsons