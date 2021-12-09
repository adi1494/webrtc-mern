import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    const brandStyle = {
        color:'#ffffff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'24',
        display:'flex',
        alignItems:'center',
    }
    const logoText = {
        marginLeft: '10px',
    }
    return (
        <nav className={`${styles.navbar} container`}>
            <Link to="/" style={brandStyle}>
                <img src="/images/logo.png" alt="logo"/>
                <span style={logoText}>WR</span>
            </Link>
        </nav>
    )
}

export default Navigation
