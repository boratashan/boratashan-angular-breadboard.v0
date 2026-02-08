import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';
<<<<<<< HEAD
import { HeaderComponent } from './header/header';
import { UserFormComponent } from './user-form/user-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, HeaderComponent, UserFormComponent],
=======
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmItemImports } from '@spartan-ng/helm/item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, HlmButtonImports, HlmItemImports], 
>>>>>>> 96a052742acfd23dc787b13b79b1e5cd915f7572
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-breadboard.v0');
}

