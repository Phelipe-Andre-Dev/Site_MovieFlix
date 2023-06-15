import {useState} from 'react'
import styles from './Cadastro.module.css'

function Cadastro(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordtwo, setPasswordtwo] = useState('')

    const [msg, setMsg] = useState ('')

    function formvalidation(e){
        e.preventDefault()
        
        

        if (nome === ''){
            setMsg('Digite seu nome')
            return false
        }

        if(email === ''){
            setMsg('Digite um email')
            return false
        }
        

        if (password === ''){
            setMsg('Digite uma senha')
            return false
        }else if (password.length < 6){
            setMsg('A senha deve conter no minimo 6 caracteres')
            
        }

        if(passwordtwo === ''){
            setMsg('Digite uma senha')
            return false
        }else if(passwordtwo !== password ){
            setMsg('Senha incorreta')
            
      
        }

    
        // aqui chamariamos a api para receber os dados do formulario
        
    }

    return(
        <form className={styles.bg}>
            <div className={styles.form}>
                <h1>Criar Login</h1>
                
                <label className={styles.item}>Digite seu nome</label>
                <input type='text' placeholder='Digite seu nome' value={nome} onChange={(e) => setNome (e.target.value)} />

                <label className={styles.item}>Digite seu e-mail</label>
                <input type='email' placeholder='Insira seu email' value={email} onChange={(e) => setEmail (e.target.value)}/>

                <label className={styles.item}>Senha</label>
                <input type='password' name='password' placeholder='Digite uma senha' value={password} onChange={(e) => setPassword (e.target.value)}/>

                <label className={styles.item}>Confirmar senha</label>
                <input type='password' name='passwordtwo' placeholder='Confirme sua senha' value={passwordtwo} onChange={(e) => setPasswordtwo (e.target.value)} />
                <div ><alert>{msg}</alert></div>
                <button type='submit' onClick={formvalidation}>Enviar</button>
            </div>
        </form>
      
    )
}
export default Cadastro