import { Component } from '@angular/core';
import { ContentCardService } from '../shared/content-card.service';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css','../../app/header/header.component.css']
})
export class SectionCardComponent {
  Items2: string[] = [' Utenti illimitati', '  Welfare guru', '   Piattaforma MySarma','   Gestione del contratto online','  Credito Welfare (illimitato)','   Importi personalizzabili online',' Gestione Scadenziata degli importi','Gestione di più borsellini welfare','   Flexible Benefit','  Sconti e Coupon']
  constructor(private ContentCard:ContentCardService){}
  dropdownItems = this.ContentCard.Items;
}
