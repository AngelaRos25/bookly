import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { BookDetailsComponent } from "../book-details/book-details.component";


@Component({
  selector: 'app-book-card',
  imports: [CommonModule, BookDetailsComponent],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
  @Input() books: any[] = [];
  imageUrl!: string;
  bookKey!: string;
  detail: any[] = [];
  details: any;

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
  }

  getDetails(bookKey: string) {
    this.apiService.getBookDetails(bookKey).subscribe({
      next: (data) => {
        this.detail = data;
        console.log('book details:', data)
      },
      error: (error) => {
        console.error('Error during request', error)
      }
    })
  }


}
