import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services =[
    {
      id: 1,
      "service": "Online service",
      "description": "Access to multiplayer games",
      "price": "+$1/mo"
    },
    {
      id: 2,
      "service": "Large storage",
      "description": "Extra 1TB of cloud save",
      "price": "+$2/mo"
    },
    {
      id: 3,
      "service": "Customizable Profile",
      "description": "Custom theme on your profile",
      "price": "+$2/mo"
    }
  ]

  selectedAddOnId: number | null = null;
  
  selectAddOn(id: number): void {
    this.selectedAddOnId = id;
    console.log(this.selectedAddOnId);
  }

}

