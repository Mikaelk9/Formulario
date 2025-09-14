import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'


function NavBar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <h1>Formulário</h1>
            </div>
            <div >
                <ul className={styles.pages}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listform">Lista de Cadastros</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar