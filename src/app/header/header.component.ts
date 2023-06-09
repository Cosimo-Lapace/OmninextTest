import { Component, Output } from '@angular/core';
import { ContentCardService } from '../shared/content-card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   CheckIcon: boolean = false;
  c = 0;

  constructor(private ContentCard : ContentCardService) {}
  dropdownItems = this.ContentCard.Items;
  checkicon() {
    this.CheckIcon = true;
    this.c++;
    if(this.c === 2){
      this.CheckIcon = false;
      this.c= 0;
    }

  }


}
