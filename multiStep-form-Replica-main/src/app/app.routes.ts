import { Routes, Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { OptionsComponent } from './options/options.component';
import { ServicesComponent } from './services/services.component';
import { SummaryComponent } from './summary/summary.component';
import { FinalPageComponent } from './final-page/final-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HeaderComponent, title: 'Your info', 
        children: [
        { path: 'step1', component: FormsComponent, title: 'Your info' },
        { path: 'step2', component: OptionsComponent, title: 'Select plan' },
        { path: 'step3', component: ServicesComponent, title: 'Add-ons' },
        { path: 'step4', component: SummaryComponent, title: 'Summary' },
        { path: 'thank-you', component: FinalPageComponent, title: 'Thank you' },
    ]},

];
