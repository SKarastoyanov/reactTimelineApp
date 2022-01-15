import {SET_CAR} from '../actions/cars';

const initialState = {
  currentCar: {},
};

const carsReducer = (state = initialState, action) => {
    debugger;
  switch (action.type) {
    case SET_CAR:
      return {
        ...state,
        currentCar: action.payload,
      };
    default:
      return state;
  }
};

export default carsReducer;
