import styles from "./account.module.css"

function Account(){
    return(
        <div>
            <p className={styles.aviso}>Usuário não está logado</p>
        </div>
    )
}

export default Account