import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  selectedPlan: string = '';


  setAddOns(addOns: any){
    this.addOns = addOns;
  }   

  addOns: any[] = [];

  total: number = 0;
  

}

