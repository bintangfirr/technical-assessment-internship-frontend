import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.html'
})
export class ContactFormComponent {
  submitting = false;

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitting = true;

      // Contoh HTTP call fake (jsonplaceholder)
      this.http.post('https://jsonplaceholder.typicode.com/posts', form.value)
        .subscribe({
          next: res => {
            alert('Form submitted successfully!\n' + JSON.stringify(form.value));
            form.reset();
            this.submitting = false;
          },
          error: err => {
            alert('Submission failed.');
            this.submitting = false;
          }
        });
    } else {
      alert('Please fill all fields.');
    }
  }
}
