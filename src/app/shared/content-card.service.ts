import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentCardService {
  Items: string[] = [' Utenti illimitati', '  Piattaforma MySarma', ' Gestione del contratto online','  MySarma Welfare Card (fino a 258€)',' Importi personalizzabili online',' Sconti e Coupon']
  constructor() { }
}
