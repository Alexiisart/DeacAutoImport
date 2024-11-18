import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: 'img:not([ngSrc])', // Se aplica a todas las imágenes excepto las que ya usan ngSrc
  standalone: true,
})
export class LazyImageDirective {
  @HostBinding('attr.loading') loading = 'lazy';

  constructor(private el: ElementRef<HTMLImageElement>) {
    // Aseguramos que la imagen tenga dimensiones
    if (!this.el.nativeElement.getAttribute('width')) {
      this.el.nativeElement.style.maxWidth = '100%';
      this.el.nativeElement.style.height = 'auto';
    }
  }
}
