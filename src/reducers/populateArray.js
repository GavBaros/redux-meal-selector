export default (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return action.payload;

    default:
      return state;
  }
};
