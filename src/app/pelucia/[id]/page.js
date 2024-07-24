import Image from "next/image";
import styles from "../../componentes/home.module.css"
import Navbar from "../../componentes/Navbar"

export default async function Pelucia({ params }) {
    const resposta = await fetch("http://localhost:3000/api/" + params.id, { next: { revalidate: 1 } });
    const pelucia = await resposta.json();

    return (
        <main>
            <Navbar />
            <div className={styles.containerProd}>
                <div className={styles.cardProd}>
                    <div className={styles.coluna}>
                        <Image className={styles.img} width={500} height={500} src={pelucia.imagem} />
                    </div>
                    <div className={styles.colunaText}>
                        <p className={styles.titulo}>{pelucia.titulo}</p>
                        <p className={styles.marca}>{pelucia.marca}</p>
                        <p className={styles.preco}>Preço: R${pelucia.preco},00</p>
                        <button className={styles.botao}>Compre agora</button>
                    </div>
                    <div className={styles.coluna}>
                        <p className={styles.titulo}>Ficha técnica:</p>
                        <p className={styles.detalhes}>{pelucia.detalhes.tamanho}</p>
                        <p className={styles.detalhes}>{pelucia.detalhes.material}</p>
                        <p className={styles.detalhes}>{pelucia.detalhes.descricao}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}