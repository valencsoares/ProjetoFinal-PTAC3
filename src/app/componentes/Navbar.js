import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className={styles.cabecalho}>
            <Link href={"http://localhost:3000/"}>
                <button className={styles.botao2} style={{ marginLeft: '2rem' }}>
                    <Image width={55} height={55} src={'https://i.pinimg.com/564x/e7/d0/53/e7d053d076e744e5edf8f8306248c904.jpg'} />
                </button>
            </Link>
        </header>
    )
}