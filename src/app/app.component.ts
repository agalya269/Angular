import { Component } from '@angular/core';
 import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutusComponent } from './aboutus/aboutus.component';

@Component({
  selector: 'app-root',
  standalone: true,
 // imports: [RouterOutlet,HomeComponent,AboutusComponent],
 imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}

