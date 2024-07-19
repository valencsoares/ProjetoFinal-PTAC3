"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import ErroNoFetch from "./ErroNoFetch";
import Carregar from "./Carregar";

export default function Home() {
    const [deuErro, setDeuErro] = useState(false)
    const [listaPelucias, setListaPelucias] = useState([])

    useEffect(() => {
        const pegarPelucia = async () => {
            try {
                const resposta = await fetch("http://localhost:3000/api", { next: { revalidate: 1 } });
                const pelucias = await resposta.json();
                setListaPelucias(pelucias)
            } catch {
                setDeuErro(true)
            }
        }
        pegarPelucia()
    }, [])

    if (deuErro == true){
        return <ErroNoFetch/>
    }

    if (listaPelucias[0] == null){
        return <Carregar/>
    }

    return (
        <main>
            <div className={styles.container}>
                {listaPelucias.map((p) => (
                    <div key={p.id} className={styles.card}>
                        <Image width={220} height={250} src={p.imagem} />
                        <p className={styles.texto}>{p.titulo}</p>
                        <p className={styles.texto}>Price: {p.preco}</p>
                        <p className={styles.texto}>{p.franquia}</p>
                        <p className={styles.texto}>{p.marca}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
