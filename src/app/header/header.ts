import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  
  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    console.log('Search query:', query);
    // TODO: Implement actual search logic or emit event
  }

  openSettings() {
    console.log('Open settings');
    // TODO: Implement settings dialog
  }
}
