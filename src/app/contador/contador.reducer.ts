import { Action, createReducer, on } from "@ngrx/store";
import { incrementar, decrementar, reset, multiplicar, dividir } from './contador.actions';

// export function contadorReducer(state: any = 10, action: Action) {
//     switch (action.type) {
//         case incrementar.type:
//             return state = state + 1;
//         case decrementar.type:
//                 return state = state - 1;
//         default:
//             return state;
//     }
// }
export const initialState = 0;

const _contadorReducer  = createReducer(
    initialState,
    on(incrementar, (state:any) => state + 1),
    on(decrementar, (state: any) => state - 1),
    on(reset, (state: any) => 0),
    on(multiplicar, (state: any, { numero }) => state*numero),
    on(dividir, (state: any, { numero }) => state/numero),
  );

  export function contadorReducer(state: any, action: Action) {
    return _contadorReducer(state, action);
  }