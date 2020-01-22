//action type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
/*
export const decrease = () => {
  return {
    type: DECREASE
  }
}
*/

//initial state
const initialState = {
  number: 0
};

//reducer
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter;