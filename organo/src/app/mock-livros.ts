import { Livro } from './components/livro/livro';

export const livros: Livro[] = [
  // --- ROMANCE ---
{
  titulo: 'Orgulho e Preconceito',
  autoria: 'Jane Austen',
  genero: { id: 'romance', value: 'Romance', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL.jpg'
},
{
  titulo: 'Jane Eyre',
  autoria: 'Charlotte Brontë',
  genero: { id: 'romance', value: 'Romance', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81x7XdQ8H-L.jpg'
},
{
  titulo: 'Anna Kariênina',
  autoria: 'Liev Tolstói',
  genero: { id: 'romance', value: 'Romance', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/91iQpRkNv8L.jpg'
},

// --- FANTASIA ---
{
  titulo: 'O Hobbit',
  autoria: 'J.R.R. Tolkien',
  genero: { id: 'fantasia', value: 'Fantasia', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg'
},
{
  titulo: 'Harry Potter e a Pedra Filosofal',
  autoria: 'J.K. Rowling',
  genero: { id: 'fantasia', value: 'Fantasia', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg'
},
{
  titulo: 'O Nome do Vento',
  autoria: 'Patrick Rothfuss',
  genero: { id: 'fantasia', value: 'Fantasia', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81EvFJzA8-L.jpg'
},

// --- DISTOPIA ---
{
  titulo: '1984',
  autoria: 'George Orwell',
  genero: { id: 'distopia', value: 'Distopia', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg'
},
{
  titulo: 'Admirável Mundo Novo',
  autoria: 'Aldous Huxley',
  genero: { id: 'distopia', value: 'Distopia', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81r3iWhpWLL.jpg'
},
{
  titulo: 'Fahrenheit 451',
  autoria: 'Ray Bradbury',
  genero: { id: 'distopia', value: 'Distopia', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/71NlcxA6uPL.jpg'
},

// --- CLÁSSICO ---
{
  titulo: 'Dom Casmurro',
  autoria: 'Machado de Assis',
  genero: { id: 'classico', value: 'Clássico', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81lH0xUlWCL.jpg'
},
{
  titulo: 'Os Miseráveis',
  autoria: 'Victor Hugo',
  genero: { id: 'classico', value: 'Clássico', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/91sB6LdcZFL.jpg'
},
{
  titulo: 'O Morro dos Ventos Uivantes',
  autoria: 'Emily Brontë',
  genero: { id: 'classico', value: 'Clássico', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81A-mGbNdkL.jpg'
},

// --- DRAMA ---
{
  titulo: 'A Menina que Roubava Livros',
  autoria: 'Markus Zusak',
  genero: { id: 'drama', value: 'Drama', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81KdFJqFA-L.jpg'
},
{
  titulo: 'O Sol é Para Todos',
  autoria: 'Harper Lee',
  genero: { id: 'drama', value: 'Drama', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81gepfQeGHL.jpg'
},
{
  titulo: 'Um Copo de Cólera',
  autoria: 'Raduan Nassar',
  genero: { id: 'drama', value: 'Drama', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/71pcE88llnL.jpg'
},

// --- REALISMO MÁGICO ---
{
  titulo: 'Cem Anos de Solidão',
  autoria: 'Gabriel García Márquez',
  genero: { id: 'realismo-magico', value: 'Realismo Mágico', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/91FjZkT5O1L.jpg'
},
{
  titulo: 'O Amor nos Tempos do Cólera',
  autoria: 'Gabriel García Márquez',
  genero: { id: 'realismo-magico', value: 'Realismo Mágico', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/91BV0zUKe4L.jpg'
},
{
  titulo: 'A Casa dos Espíritos',
  autoria: 'Isabel Allende',
  genero: { id: 'realismo-magico', value: 'Realismo Mágico', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/91cqqmT2y-L.jpg'
},

// --- EXISTENCIALISMO ---
{
  titulo: 'A Metamorfose',
  autoria: 'Franz Kafka',
  genero: { id: 'existencialismo', value: 'Existencialismo', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/71GVblJ0nSL.jpg'
},
{
  titulo: 'O Estrangeiro',
  autoria: 'Albert Camus',
  genero: { id: 'existencialismo', value: 'Existencialismo', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81WfKpbAaiL.jpg'
},
{
  titulo: 'A Náusea',
  autoria: 'Jean-Paul Sartre',
  genero: { id: 'existencialismo', value: 'Existencialismo', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81t8uKXuRML.jpg'
},

// --- INFANTIL ---
{
  titulo: 'O Pequeno Príncipe',
  autoria: 'Antoine de Saint-Exupéry',
  genero: { id: 'infantil', value: 'Infantil', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81gepf1eMqL.jpg'
},
{
  titulo: 'Coraline',
  autoria: 'Neil Gaiman',
  genero: { id: 'infantil', value: 'Infantil', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81UmlVtZk3L.jpg'
},
{
  titulo: 'Matilda',
  autoria: 'Roald Dahl',
  genero: { id: 'infantil', value: 'Infantil', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81UivXQ89pL.jpg'
},

// --- SÁTIRA ---
{
  titulo: 'A Revolução dos Bichos',
  autoria: 'George Orwell',
  genero: { id: 'satira', value: 'Sátira', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81O-MqQSq-L.jpg'
},
{
  titulo: 'O Guia do Mochileiro das Galáxias',
  autoria: 'Douglas Adams',
  genero: { id: 'satira', value: 'Sátira', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/81oNTWbZT-L.jpg'
},
{
  titulo: 'Candide',
  autoria: 'Voltaire',
  genero: { id: 'satira', value: 'Sátira', livros: [] },
  favorito: false,
  imagem: 'https://m.media-amazon.com/images/I/71z8AhtOsiL.jpg'
}

];
