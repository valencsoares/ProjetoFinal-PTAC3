"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import ErroNoFetch from "./ErroNoFetch";
import Carregar from "./Carregar";
import Link from "next/link";

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

    const ordenaAz = () => {
        const listaAux = [...listaPelucias].sort((a, b) => a.titulo.localeCompare(b.titulo));
        setListaPelucias(listaAux)
    }
    const ordenaZa = () => {
        const listaAux = [...listaPelucias].sort((a, b) => b.titulo.localeCompare(a.titulo));
        setListaPelucias(listaAux)
    }
    const precoCrescente = () => {
        const listaAux = [...listaPelucias].sort((a, b) => a.preco - b.preco);
        setListaPelucias(listaAux)
    }
    const precoDecrescente = () => {
        const listaAux = [...listaPelucias].sort((a, b) => b.preco - a.preco);
        setListaPelucias(listaAux)
    }
    const ordenaFranquiaAz = () => {
        const listaAux = [...listaPelucias].sort((a, b) => a.franquia.localeCompare(b.franquia));
        setListaPelucias(listaAux)
    }


    if (listaPelucias[0] == null){
        return <Carregar/>
    }

    return (
        <main>
            <div className={styles.input}>
                <button className={styles.botao3} onClick={ordenaAz}> Organize pelo título de A a Z </button>
                <button className={styles.botao3} onClick={ordenaZa}> Organize pelo título de Z a A </button>
                <button className={styles.botao3} onClick={ordenaFranquiaAz}> Organize pela franquia </button>
                <button className={styles.botao3} onClick={precoCrescente}> Filtar por menor preço </button>
                <button className={styles.botao3} onClick={precoDecrescente}> Filtar por maior preço </button>
            <div className={styles.container}>
                {listaPelucias.map((p) => (
                    <div className={styles.card}>
                        <Image width={220} height={250} src={p.imagem} />
                        <p className={styles.textoTitulo}>{p.titulo}</p>
                        <p className={styles.texto}>{p.franquia}</p>
                        <Link href={"/pelucia/" + p.id}>
                            <div>
                                <button className={styles.botao}>Ver mais</button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
