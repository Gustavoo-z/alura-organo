export const ACTIONS = {
  SET_ALL: "SET_ALL",
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
};

export default function colaboradoresReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ALL:
      return action.payload;

    case ACTIONS.ADD:
      return [...state, action.payload];

    case ACTIONS.DELETE:
      return state.filter((colaborador) => colaborador.id !== action.payload);

    case ACTIONS.TOGGLE_FAVORITE:
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
