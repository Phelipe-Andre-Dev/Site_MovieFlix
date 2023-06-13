import { Link } from "react-router-dom"
import styles from './Button.module.css'

function Button (){
    return(
        <Link className={styles.bnt} to='/cadastro'>Cadastrar</Link>

    )
}
export default Button