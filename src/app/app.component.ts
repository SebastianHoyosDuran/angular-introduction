import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CURSO DE ANGULAR MIC-TIC';
  valor: number = 0;
  darMensaje(){
    alert("Saludos desde fosca");
  }
  incrementar(){
    this.valor ++;
  }
  decrementar(){
    this.valor--;
  }
}
