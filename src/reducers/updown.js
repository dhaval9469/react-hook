const initialState = 0;

const changeTheNumber = (state = initialState, actoin) => {
  switch (actoin.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeTheNumber;
