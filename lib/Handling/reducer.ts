export function arrayReducer(state: any, action: any) {
  switch (action.type) {
    case 'add': {
      return [...state, action?.data ?? {}];
    }

    case 'remove': {
      let array = [...state];
      array.pop();
      return array;
    }

    case 'reFetch': {
      return action.data;
    }

    case 'removeById': {
      let array = [...state];

      return array.filter((data) => data[action.id] !== action.value);
    }

    case 'add_children': {
      let array = [...state];
      const data = array.map((val) => {
        if (val[action.identifier] === action.value) {
          return {
            ...val,
            details: [...val?.details, action?.data ?? {}],
          };
        }

        return val;
      });

      return data;
    }

    case 'remove_children': {
      let array = [...state];
      const data = array.map((val) => {
        if (val[action.identifier] === action.value) {
          let newArray = [...val?.details];
          newArray.pop();
          return {
            ...val,
            details: [...newArray],
          };
        }

        return val;
      });
      return data;
    }

    default:
      break;
  }
}

export function stringReducer(state: any, ...action: string[]) {
  state[action[0]] = action[1];

  return state;
}
