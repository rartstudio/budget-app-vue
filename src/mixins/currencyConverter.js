export const helpers = {
  methods: {
    currencyConverter(amount) {
      if (amount.length === 4) {
        let first = amount.substr(0, 1);
        let second = amount.substr(1, 4);
        return `${first}.${second}`;
      }
      if (amount.length === 5) {
        let first = amount.substr(0, 2);
        let second = amount.substr(2, 5);
        return `${first}.${second}`;
      }
      if (amount.length === 6) {
        let first = amount.substr(0, 3);
        let second = amount.substr(3, 6);
        return `${first}.${second}`;
      }
      if (amount.length === 7) {
        let first = amount.substr(0, 1);
        let second = amount.substr(1, 4);
        let third = amount.substr(4, 7);
        return `${first}.${second}.${third}`;
      }
      if (amount.length === 8) {
        let first = amount.substr(0, 2);
        let second = amount.substr(2, 5);
        let third = amount.substr(5, 8);
        return `${first}.${second}.${third}`;
      }
      if (amount.length === 9) {
        let first = amount.substr(0, 3);
        let second = amount.substr(3, 6);
        let third = amount.substr(6, 9);
        return `${first}.${second}.${third}`;
      }
      return amount;
    }
  }
};
