import React from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    }

    const navigate = useNavigate();

    function startRegistration() {
        navigate('/register')
        console.log('button clicked')
    }

    return (
        <div className={styles.cardwrapper}>
            <Card title='Welcome to WR!' icon='images/logo.png'>
                <p className={`${styles.txt}`}>Hey! We’re working to get WR ready for everyone! While we wrap up the finishing touches, we’re adding people gradually to make sure nothing breaks!</p>
                <div className={styles.buttonwrapper}>
                    <Button onClickProp={startRegistration} text="Get your Username"/>
                </div>
                <div className={styles.signinwrapper}>
                    <span className={styles.invite}>Already have an invite?</span>
                    <Link to='/signin' style={signInLinkStyle}>Sign In</Link>
                </div>
            </Card>
        </div>
    )
}

export default Home
