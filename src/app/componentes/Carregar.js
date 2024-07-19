import Image from "next/image";
import styles from "./home.module.css";

export default function Carregar(){
    return (
        <div className={styles.centraliza}>
            <Image width={100} height={100} src={"/loading.svg"}></Image>
        </div>
    )
}