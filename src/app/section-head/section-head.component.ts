import { Component } from '@angular/core';

@Component({
  selector: 'app-section-head',
  templateUrl: './section-head.component.html',
  styleUrls: ['./section-head.component.css']
})
export class SectionHeadComponent {

  images = [
    {
    imagePath:'../../assets/public/image/welfare_guru_3x-p-500.webp',
    title:'Welfare Guru',
    body:'per un piano di welfare aziendale personalizzato'
  },
  {
    imagePath:'../../assets/public/image/gestione_del_piano_welfare3x-p-500.png',
    title:'Gestione del piano',
    body:'welfare e dei fornitori di servizi a livello locale'
  },
  {
    imagePath:'../../assets/public/image/servizi_welfare3x-p-500.png',
    title:'Servizi welfare',
    body:'in ambito flexible benefit & employee caring'
  },
  {
    imagePath:'../../assets/public/image/piattaforma_welfare3x-p-500.png',
    title:'Piattaforma Welfare',
    body:'accessibile da qualunque dispositivo'
  },
]
}
