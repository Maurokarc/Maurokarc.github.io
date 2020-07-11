export default {
    fieldSameAs: {
      validate: (value, { target }) => {
        if (!value || !target) return false;
        return value === target;
      },
      params: ["target"],
    },
  };
  