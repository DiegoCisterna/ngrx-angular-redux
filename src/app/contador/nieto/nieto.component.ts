import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/interfaces/app-reducer.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
// @Input() contador:any;
// @Output() contadorCambio = new EventEmitter<any>();
  contador: number;

  constructor(private store: Store<appState>) {
    this.contador = 0;
   }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador=contador);
  }

  reset(){
    // this.contador = 0;
    // this.contadorCambio.emit(this.contador);
    this.store.dispatch(actions.reset());
  }

}
