import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  imie = signal('');
  nazwisko = signal('');
  dataUrodzenia = signal('');
  pokaz = signal(false);

  ustawImie(event: Event) {
    const input = event.target as HTMLInputElement;
    this.imie.set(input.value);
  }

  ustawNazwisko(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nazwisko.set(input.value);
  }

  ustawDate(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dataUrodzenia.set(input.value);
  }

  wyslij() {
    this.pokaz.set(true);
  }

}
