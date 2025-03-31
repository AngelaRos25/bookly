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
    if(!category){
      console.error('errore categoria richiesta');
      return;
    }
    this.apiService.getCategory(category).subscribe({
      next: (data) => {
        if( data && data.works && data.works.length > 0){
          this.book = data.works;
          console.log('search', this.book);
        }else{
          console.error('nessun libro trovato con questa categoria');
          this.book = [];
        }
      },
      error: (error) => {
        console.error('search error', error)
      }
    })
  }
}
