import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {


  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    const accordions = this.elementRef.nativeElement.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", () => {
        accordions[i].classList.toggle("active");
        const panel = accordions[i].nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
    }

  }

