
// import { LoaderComponent } from '../../shared/loader/loader.component';


import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../types/fruits';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-all-fruit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-fruit.component.html',
  styleUrl: './all-fruit.component.css'
})
export class AllFruitComponent implements OnInit{
  fruits: Fruit[] = [];
  isLoading = true;
  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getFruits().subscribe((fruits) => {
      this.fruits = fruits;
      this.isLoading = false;
    });
  }
}
