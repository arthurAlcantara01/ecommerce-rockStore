import styles from "./logo.module.css"

function Logo(){
    return (
        <h1 className={styles.logo}>
            ROCK
            <span className={styles.logoSpan}>STORE</span>
        </h1>
    )
}

export default Logo