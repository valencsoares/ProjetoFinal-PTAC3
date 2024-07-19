import styles from "./home.module.css";

export default function ErrorFetch(){
    return(
        <div className={styles.erroFetch}>
            <p>Ocorreu um erro ao carregar os dados.</p>
        </div>
    )
}