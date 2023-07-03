import { Nav } from 'rsuite';
import React, { useState, useEffect } from 'react';
import HomeIcon from '@rsuite/icons/legacy/Home';
import ImportIcon from '@rsuite/icons/Import';
import ExportIcon from '@rsuite/icons/Export'
import logo from '../../assets/images/logovet.png';
import './nav.css';
import axios from 'axios';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const getUserNom = async () => {
        try {
            const result = await axios.get("https://localhost:8000/users/email")
            console.log("test", result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchUser = async (id) => {
            try {
                const response = await axios.get(`http://localhost:8000/user/${id}`);
                const userData = response.data;
                console.log("test", userData)
                setUser(userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);

    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser('')
    };

    return (
        <Nav >
            <div className='navStyle'>
                <div>

                    <Nav.Item className='test' icon={<HomeIcon />} href='/'>Home</Nav.Item>
                    <Nav.Item className='test' href='/faq'>FAQ</Nav.Item>
                    <Nav.Item className='test' href='/rdv'>Rendez-vous</Nav.Item>
                </div>
                <img src={logo} id='logo' className='logo' />

                {isLoggedIn ? (
                    <>
                        {user} |<Nav.Item className='test' icon={<ExportIcon />} onClick={handleLogout} href='/'>Se déconnecter</Nav.Item>
                    </>
                ) : (
                    <Nav.Item className='test' icon={<ImportIcon />} onClick={handleLogin} href='login'>Se connecter</Nav.Item>)}


            </div>

        </Nav>
    )

};

export default NavBar;