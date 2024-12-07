import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-fruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-fruit.component.html',
  styleUrl: './add-fruit.component.css'
})
export class AddFruitComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addFruit(form: NgForm) {

    if (form.invalid) {
      return;
    }

     const { name,  description } = form.value
     this.apiService.createFruit(name,description).subscribe(() => {
        this.router.navigate(['/fruits'])
     });
}
}
