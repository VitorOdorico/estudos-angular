export interface Livro{
titulo: string;
autoria: string;
imagem: string;
favorito: boolean;
genero: GeneroLiterario
}

export interface GeneroLiterario{
  id: String;
  value: string;
  livros: Livro[]
}
