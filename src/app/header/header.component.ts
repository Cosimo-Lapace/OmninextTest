import { Component, DoCheck, OnInit, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  CheckIcon: boolean = false;
  c = 0;
  dropdownItems: string[] = [' Utenti illimitati', '  Piattaforma MySarma', ' Gestione del contratto online','  MySarma Welfare Card (fino a 258€)',' Importi personalizzabili online',' Sconti e Coupon']
  constructor() {}
  checkicon() {
    this.CheckIcon = true;
    this.c++;
    if(this.c === 2){
      this.CheckIcon = false;
      this.c= 0;
    }

  }


}
