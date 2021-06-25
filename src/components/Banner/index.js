import React from 'react'

import Logo from '../../assets/logo.svg'

import './styles.css'
const Banner = () => {
    return (
        <div className="banner">
            <div>
                <h1>App divertido</h1>
                <p>Um projetinho para treinar reactjs, react-router-dom e axios</p>
            </div>
            <img src={Logo} alt="logo" />
        </div>
    )
}
export default Banner