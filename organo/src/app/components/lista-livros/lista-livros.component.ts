import { livros } from './../../mock-livros';
import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { map } from 'rxjs';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  generos: GeneroLiterario[] = [];

  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });
    this.generos = [
      {id: 'romance', value: "Romance", livros: this.livrosPorGenero.get("romance")??[]},
      {id: 'fantasia', value: "Fantasia", livros: this.livrosPorGenero.get("fantasia")??[]},
      {id: 'distopia', value: "Distopia", livros: this.livrosPorGenero.get("distopia")??[]},
      {id: 'classico', value: "Classico", livros: this.livrosPorGenero.get("classico")??[]},
      {id: 'drama', value: "Drama", livros: this.livrosPorGenero.get("drama")??[]},
      {id: 'realismo-magico', value: "Realismo Mágico", livros: this.livrosPorGenero.get("realismo-magico")??[]},
      {id: 'existencialismo', value: "Existencialismo", livros: this.livrosPorGenero.get("existencialismo")??[]},
    ]
  }
}
