function assign(target, ...args) {
  for (let i = 0; i < args.length; i++) {
    for (let prop in args[i]) {
      if (Object.prototype.hasOwnProperty.call(args[i], prop)) {
        target[prop] = args[i][prop];
      }
    }
  }
  return target;
}

const paymentsCard = { cash: '100$' };
const creditCard = { creditLimit: '50$', cash: '200$' };
const universalCard = assign({}, creditCard, paymentsCard);

// console.log(universalCard); 
// { creditLimit: '50$', cash: '100$' };