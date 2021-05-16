import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/interfaces/app-reducer.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
//  @Input() contador: any;
//  @Output() cambioContador = new EventEmitter<number>()
  contador: number;
  constructor(private store: Store<appState>){
    this.contador = 0;
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  multiplicar(){
    // this.contador = this.contador*2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({numero: 2}));
  }
  dividir(){
    // this.contador = this.contador/2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({numero: 2}));
  }

}
