import styles from './Input.module.css'

function Input (props){
    return(
        <div className={styles.input}>
            <label>Pesquisar</label>
            <input type="text" 
            placeholder="Digite um filme..."
            value={props.value} 
            onChange={(e) => props.setSearchValue(e.target.value)}/>
        </div>


    )
}
export default Input