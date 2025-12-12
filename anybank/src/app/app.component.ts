import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { ContaComponent } from "./banner/conta/conta.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";

@Component({
  selector: 'app-root',
  imports: [
    BannerComponent,
    FormNovaTransacaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
}
