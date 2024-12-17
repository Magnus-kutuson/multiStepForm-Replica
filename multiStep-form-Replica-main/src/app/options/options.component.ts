import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
  providers: [DataService]
})
export class OptionsComponent {
  isYearlyBilling = false;
  billingType = 'Monthly';

  constructor(public dataService: DataService) {}

options = [
  { id: 1, icon: '../../assets/images/icon-arcade.svg', plan: 'arcade', month: '$9/mo', year: '$90/yr',  },
  { id: 2, icon: '../../assets/images/icon-advanced.svg', plan: 'advanced', month: '$12/mo', year: '$120/yr' },
  { id: 3, icon: '../../assets/images/icon-pro.svg', plan: 'pro', month: '$15/mo', year: '$150/yr' },
]

toggleBilling(): void {
  this.isYearlyBilling = !this.isYearlyBilling;
  this.billingType = this.isYearlyBilling ? 'Yearly' : 'Monthly';
  console.log(this.billingType);
}

selectedPlanId = 1;
selectedPlan(id: number): void {
   this.selectedPlanId = id
}
saveData(key: string, value: string) {
  this.dataService.setItem('userId', JSON.stringify(this.selectedPlanId));
}
}


