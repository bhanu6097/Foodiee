export const restaurantReducer = (
  state = {
    currentUser: "",
    count: 0
  },
  action
) => {
  switch (action.type) {
    case "SELECTED_RESTAURANT":
      return Object.assign({}, state, { currentUser: action.userValue });
    case "INCREMENT": {
      console.log("Printing count " + state.count);
      return Object.assign({}, state, {
        count: state.count + 1
      });
    }
    case "DECREMENT": {
      console.log("Printing count " + state.count);
      return Object.assign({}, state, {
        count: state.count - 1
      });
    }
    default:
      return state;
  }
};
