import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form';

@Component({
  selector: 'app-root',
  template: `<h1 class="text-center fw-bold">Hotel SPA</h1>
             <app-contact-form></app-contact-form>`,
  standalone: true,
  imports: [ContactFormComponent]
})
export class AppComponent { }
