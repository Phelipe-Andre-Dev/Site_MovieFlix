import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../layout/logo.png'

function Navbar (){
    return(
        <nav className={styles.navbar}>
        
            <ul className={styles.list} >
            <Link><img className={styles.img} to='/' src={logo} alt='movie' ></img></Link>
                <li className={styles.item} >
                    <Link to='/'>Home</Link>
                </li>

                <li className={styles.item} >
                    <Link to='cadastro'>Cadastro</Link>
                </li>

                <li className={styles.item} >
                    <Link to='movie'>Lista de Filmes</Link>
                </li>

               

               
            </ul>
            
        </nav>

    )
}
export default Navbar