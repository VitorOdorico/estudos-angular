import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  livro ={
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    imagem: "https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg",
    favorito: false
  }
  alternarFavorito(){
    this.livro.favorito = !this.livro.favorito
  }
}
