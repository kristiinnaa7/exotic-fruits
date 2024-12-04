import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-add-fruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-fruit.component.html',
  styleUrl: './add-fruit.component.css'
})
export class AddFruitComponent {
  constructor(private apiService: ApiService) {}

  addFruit(form: NgForm) {
    console.log(form);

    if (form.invalid) {
      return;
    }

    console.log(form.value);

    //  this.apiService.createTheme(themeName, postText).subscribe((data) => {
    //    console.log(data);
    //  });
}
}
