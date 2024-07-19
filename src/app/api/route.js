import { NextResponse } from "next/server";

export const listaDePelucias = [
    {id: 1, titulo: "Pelúcia Stitch", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/img_300911-ce8c88ec887339d8e316842715409930-480-0.webp", preco: 230.00, franquia: "Lilo e Stitch", marca: "Disney"},
    {id: 2, titulo: "Pelúcia Dama", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/img_31231-6be83bbe0874b76ffa16842770413524-480-0.webp", preco: 230.00, franquia: "A Dama e o Vagabundo", marca: "Disney"},
    {id: 3, titulo: "Pelúcia Dug", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/img_8464-a43a1679d850b4941e17014475087222-480-0.webp", preco: 215.00, franquia: "UP - Altas Aventuras", marca: "Disney"},
    {id: 4, titulo: "Pelúcia Lúcifer", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/dsc_0267-918f1f808e4890556817192504860264-480-0.webp", preco: 230.00, franquia: "Cinderela", marca: "Disney"},
    {id: 5, titulo: "Pelúcia Ió", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/dsc_0397-09aee14d52912505b917106328355796-1024-1024.webp", preco: 230.00, franquia: "O Ursinho Pooh", marca: "Disney"},
    {id: 6, titulo: "Pelúcia Marie", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/24ced2c1-d018-4061-8232-da304216eca61-18878bd1175cbf2f7616799180215227-480-0.webp", preco: 250.00, franquia: "Aristogatas", marca: "Disney"},
    {id: 7, titulo: "Pelúcia Pooh", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/img_30781-ceddf08dd46bee480d16842772583351-480-0.webp", preco: 220.00, franquia: "O Ursinho Pooh", marca: "Disney"},
    {id: 8, titulo: "Pelúcia Remy Chef", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/img_8492-234477ee6e11c651b417014472876270-480-0.webp", preco: 230.00, franquia: "Ratatouille", marca: "Disney"},
    {id: 9, titulo: "Pelúcia Sulley", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/a07ebac7-c404-4ba1-86d0-946c37f19ff5-50a41063f4d717a1bb16484836647520-480-0.webp", preco: 250.00, franquia: "Monstros S.A.", marca: "Disney"},
    {id: 10, titulo: "Pelúcia Vagabundo", imagem: "https://acdn.mitiendanube.com/stores/001/861/700/products/img_31311-63c7815c7606f30a3516842769940066-480-0.webp", preco: 230.00, franquia: "A Dama e o Vagabundo", marca: "Disney"}
];

export async function GET(){
    return NextResponse.json(listaDePelucias)
}