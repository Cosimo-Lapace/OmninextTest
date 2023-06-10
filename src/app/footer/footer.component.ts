import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footertexts = [
    {
    a:['Chi siamo','Vision & Mission','Il gruppo Omninext','Contattaci']
  },
  {
    a:['Soluzioni welfare','Felxible benefit','Premio di risultato','Performance Management']
  },
];
divrightancors = ['Piano Go!','Piano Pro','Diventa partner']

}
