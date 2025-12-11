import { Livro } from './components/livro/livro';

export const livros: Livro[] = [
  {
    titulo: 'As ondas',
    autoria: 'Virginia Woolf',
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: [],
    },
    favorito: false,
    imagem: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wC...',
  },
  {
    titulo: 'As ondas',
    autoria: 'Virginia Woolf',
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: [],
    },
    imagem:
      'https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg',
    favorito: false,
  },
];
