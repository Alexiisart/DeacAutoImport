import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LazyImageDirective } from '../../shared/directives/lazy-image.directive';
declare const WhWidgetSendButton: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LazyImageDirective],
  hostDirectives: [LazyImageDirective], // Esto hace que la directiva se aplique globalmente

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'deacAuto';
}
