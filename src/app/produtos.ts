export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeEstoque: number;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
quantidade: number;
}

export const produtos: IProduto[] = [
  { id: 1, descricao: "Mouse Gamer", preco:439.00, descricaoPreco: "A vista no Pix", imagem: "./assets/mouse-1.png", quantidadeEstoque: 15 },
  { id: 2, descricao: "Monitor muito bom", preco:1200.50, descricaoPreco: "A vista no Pix", imagem: "./assets/monitor-1.jpg", quantidadeEstoque: 9  },
  { id: 3, descricao: "Teclado Excelente", preco:749.99, descricaoPreco: "A vista no Pix", imagem: "./assets/teclado-1.jpg" , quantidadeEstoque: 11 },
  { id: 4, descricao: "Fone para quem Joga FPS", preco:599.99, descricaoPreco: "A vista no Pix", imagem: "./assets/fone-de-ouvido-2.jpg",quantidadeEstoque: 10 },
  { id: 5, descricao: "Fone de ouvido", preco:299.99, descricaoPreco: "A vista no Pix", imagem: "./assets/fone-de-ouvido-1.jpg" , quantidadeEstoque: 10 },
  { id: 6, descricao: "Fone de ouvido bom", preco:399.00, descricaoPreco: "A vista no Pix", imagem: "./assets/fone-de-ouvido-3.jpg" , quantidadeEstoque: 10 },
  { id: 7, descricao: "HD 1TB", preco:500.00, descricaoPreco: "A vista no Pix", imagem: "./assets/hd.jpg", quantidadeEstoque: 6 },
  { id: 8, descricao: "Combo de Placa de video", preco:18499.00, descricaoPreco: "A vista no Pix", imagem: "./assets/placa-video.jpg",quantidadeEstoque: 10 },
  { id: 9, descricao: "Processador Ryzen", preco:1000.00, descricaoPreco: "A vista no Pix", imagem: "./assets/processador.jpg", quantidadeEstoque: 11},
  { id: 10, descricao: "Notebook bom", preco:2500.00, descricaoPreco: "A vista no Pix", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 15 },
  { id: 11, descricao: "Notebook Excelente", preco:4500.00, descricaoPreco: "A vista no Pix", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 7 },
  { id: 12, descricao: "Mouse Barato", preco:20.00, descricaoPreco: "A vista no Pix", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 4 },
  { id: 13, descricao: "Mouse Otimo", preco:200.00, descricaoPreco: "A vista no Pix", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 10 },
  { id: 14, descricao: "Mouse Pequeno", preco:50.00, descricaoPreco: "A vista no Pix", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 10 },
  { id: 15, descricao: "Teclado Bom", preco:159.00, descricaoPreco: "A vista no Pix", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 },

]