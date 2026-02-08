import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient);
    // Using jsonplaceholder as a mock API for demonstration
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    submitUser(data: { name: string; surname: string }): Observable<any> {
        // We post to the mock API. 
        // In a real app, this would be your actual backend endpoint.
        return this.http.post(this.apiUrl, data);
    }
}
