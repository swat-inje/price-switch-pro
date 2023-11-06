import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'priceSwitchPro';
  toggle: string = "Dollar";

  toggleCurrency(event: any) {
    const selectedValue = event.target.getAttribute('value');

    console.log(selectedValue);

    this.toggle = selectedValue;
  }
}


