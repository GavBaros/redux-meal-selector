export const Add = value => {
  return {
    type: "ADD",
    payload: value
  };
};

export const Delete = (current_array, indexOfItemToDelete) => {
  // It is an array of the original array, excluding the item that needs to be deleted
  let updatedArray = current_array.filter((item, index) => {
    return index !== indexOfItemToDelete;
  });

  return {
    type: "DELETE",
    payload: updatedArray
  };
};
