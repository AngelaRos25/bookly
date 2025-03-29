import { Component, inject, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-book-details',
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() details: any;
  localDetails: any;
  private modalService = inject(NgbModal);

  constructor() { }

  openLg(content: TemplateRef<any>) {
    if (!this.details) {
      console.warn("⚠️ 'details' non è pronto, riprova più tardi!");
      return;
    }else{
      this.details = undefined;
      this.modalService.open(content, { size: 'lg' });
    }
  }

}
