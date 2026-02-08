import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './user-form.html',
    styleUrl: './user-form.css'
})
export class UserFormComponent {
    private userService = inject(UserService);

    userForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required])
    });

    onSubmit() {
        if (this.userForm.valid) {
            console.log('Submitting form:', this.userForm.value);

            this.userService.submitUser({
                name: this.userForm.value.name!,
                surname: this.userForm.value.surname!
            }).subscribe({
                next: (response) => {
                    console.log('API Response:', response);
                    alert(`User ${this.userForm.value.name} submitted successfully! (API ID: ${response.id})`);
                    this.userForm.reset();
                },
                error: (error) => {
                    console.error('API Error:', error);
                    alert('Failed to submit user. Please try again.');
                }
            });
        }
    }
}
