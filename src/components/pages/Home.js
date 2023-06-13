import styles from './Home.module.css'
import Button from '../Button'

function Home (){
    return(
        
           <section className={styles.box}>
                <h1>Seja bem vindo ao <span className={styles.span}>Movie</span></h1>
                <h2>Clique em cadastar!</h2>
                <Button to='cadastro'/>

               

            </section>

            


       
   
            
        
    )
}
export default Home  