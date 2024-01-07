import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrl: './un-common-page.component.css',
})
export class UnCommonPageComponent {
  // i18n select
  public name: string = 'Kevin';
  public geneder: 'male' | 'female' = 'male';
  public change: boolean = false;
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.change) {
      this.geneder = 'male';
      this.name = 'Kevin';
      this.change = false;
      return;
    }

    this.name = 'Martha';
    this.geneder = 'female';
    this.change = true;
  }

  // i18n prural
  public clients: string[] = ['Maria', 'Kevin', 'Miguel', 'Juan', 'Martha'];

  public clientsMap = {
    '=0': 'no poseemos   clientes en espera.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }


  // KeyValue Pipe
  public person = {
    name: 'Kevin',
    age: 23,
    address: 'Carazo, Nicaragua'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(value) )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa ')
    }, 3500);
  })

}
