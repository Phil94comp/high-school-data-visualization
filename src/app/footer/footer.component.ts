import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer>
              &copy;{{ theStartCopyrightYear }}-{{ currentCopyrightYear }} Phillip Andrews
            </footer>`
})
export class FooterComponent {
  theStartCopyrightYear = '2024'
  currentCopyrightYear: number = new Date().getFullYear();
}
