import style from './NavBar.module.css'
import { Outlet, Link } from 'react-router-dom'

function NavBar() {

    return(
        <>
            <nav className={style.navBar}>

                <ul className={style.list}>

                    <Link to='/???'>
                        <li className={style.item}><img className={style.logo} src='./ScriptedChaos-Logo.png'/></li>
                    </Link>

                    <Link to='/'>
                        <li className={style.item}>Home</li>
                    </Link>

                    <Link to='/joinTeam'>
                        <li className={style.item}>Trabalhe Conosco!</li>
                    </Link>

                    <Link to='/List'>
                        <li className={style.item}>Lista de colaboradores</li>
                    </Link>

                </ul>
            
                <Outlet/>

            </nav>
        </>
    );
};

export default NavBar;