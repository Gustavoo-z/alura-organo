import { IColaboradorBase } from './shared/interfaces/IColaborador';

type State = IColaboradorBase[];
export type Action =
  | { type: 'SET_ALL'; payload: IColaboradorBase[] }
  | { type: 'ADD'; payload: IColaboradorBase }
  | { type: 'DELETE'; payload: number }
  | { type: 'TOGGLE_FAVORITE'; payload: number };

  export const ACTIONS = {
  SET_ALL: "SET_ALL",
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
} as const;

export default function colaboradoresReducer(
  state: State,
  action: Action
): State {
  switch (action.type) {
    case 'SET_ALL':
      return action.payload;

    case 'ADD':
      return [...state, action.payload];

    case 'DELETE':
      return state.filter((colaborador) => colaborador.id !== action.payload);

    case 'TOGGLE_FAVORITE':
      return state.map((colaborador) => {
        if (colaborador.id === action.payload) {
          return { ...colaborador, favorito: !colaborador.favorito };
        }
        return colaborador;
      });

    default:
      return state;
  }
}
