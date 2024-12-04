import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './types/fruits';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

//   getPosts(limit?: number) {
//     const { apiUrl } = environment;
//     let url = `${apiUrl}/fruits`;
//     if (limit) {
//       url += `?limit=${limit}`;
//     }
//     console.log(url);
    

//     return this.http.get<Post[]>(url);
//   }

  getFruits() {
    const { apiUrl } = environment;
    return this.http.get<Fruit[]>(`${apiUrl}/fruits`);
  }

  getSingleFruit(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Fruit>(`${apiUrl}/fruits/${id}`);
  }

  createFruit(fruitName: string, postText: string) {
    const { apiUrl } = environment;
    const payload = { fruitName, postText };
    return this.http.post<Fruit>(`${apiUrl}/fruits`, payload);
  }
}
