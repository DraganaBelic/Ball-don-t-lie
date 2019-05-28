import { reducerActions } from "../constants/action";


export function addEditGlobalPropToStore(property) {
  return {
    type: reducerActions.ADD_EDIT_GLOBAL_PROP_IN_STORE,
    property
  }
}
