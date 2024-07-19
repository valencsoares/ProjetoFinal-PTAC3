import Image from "next/image";
import styles from "./home.module.css"; 

export default async function Home() {
  const resposta = await fetch("http://localhost:3000/api", { next: { revalidate: 1 } });
  const pelucias = await resposta.json();

  return (
    <main>
      <div className={styles.container}>
        {pelucias.map((p) => (
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
