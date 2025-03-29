import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from "../book-card/book-card.component";
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-home-page',
  imports: [FormsModule, CommonModule, BookCardComponent, BookCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  category!: string;
  book: any[] = [];
  books: any;

  constructor(private apiService: ApiService) { }
  ngOnInit(): void { }

  search(category: string) {
    this.apiService.getCategory(category).subscribe({
      next: (data) => {
        this.book = data.works;
        console.log('search', data);
        console.log(this.book)
      },
      error: (error) => {
        console.error('search error', error)
      }
    })
  }
}
