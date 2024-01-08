import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css',
})
export class OrderPageComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | undefined | '';

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Punisher', canFly: false, color: Color.black },
    { name: 'Green Lanter', canFly: true, color: Color.green },
    { name: 'Daredevil', canFly: false, color: Color.red },
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero){
    this.orderBy = value;
  }

}
