import { NextResponse } from "next/server";

export default listaDePelucias [
    {id: 1, titulo: "Pelúcia Lilo e Stitch", imagem: "https://i.pinimg.com/564x/18/41/cb/1841cba033262ea59e77656566d5eac4.jpg", preco: 100.99, marca: "Disney"}
];

export async function GET(){
    return NextResponse.json(listaDePelucias)
}