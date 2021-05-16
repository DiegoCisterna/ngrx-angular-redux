import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { appState } from './interfaces/app-reducer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  contador = 10;
constructor(private store: Store<appState>){
  this.store.select('contador').subscribe(contador => {
    this.contador = contador;
    
  })
}


  incrementar(){
    this.store.dispatch(actions.incrementar());
  }

  decrementar(){
    this.store.dispatch(actions.decrementar())
  }
}
