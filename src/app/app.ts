import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';
import { HeaderComponent } from './header/header';
import { UserFormComponent } from './user-form/user-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, HeaderComponent, UserFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-breadboard.v0');
}

