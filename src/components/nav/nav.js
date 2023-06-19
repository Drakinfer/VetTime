import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import ImportIcon from '@rsuite/icons/Import';
import logo from '../../assets/images/logovet.png';
import './nav.css';

const NavBar = () => (
    <Nav >
        <div className='navStyle'>
            <div>

                <Nav.Item className='test' icon={<HomeIcon />} href='/'>Home</Nav.Item>
                <Nav.Item className='test'>FAQ</Nav.Item>
                <Nav.Item className='test' href='/rdv'>Rendez-vous</Nav.Item>
            </div>
            <img src={logo} id='logo' className='logo' />
            <Nav.Item className='test' icon={<ImportIcon />} href='login'>Se connecter</Nav.Item>
        </div>

    </Nav>
);

export default NavBar;