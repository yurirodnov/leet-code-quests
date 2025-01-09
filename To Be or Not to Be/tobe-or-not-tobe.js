const expect = (val) => {
  return {
    toBe: (value) => {
      if (val === value) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (value) => {
      if (val !== value) {
        return true;
      } else {
        throw new Error("Eqial");
      }
    },
  };
};
