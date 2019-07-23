const data = [
  { TXN_DATE: '1/2/18',
   TXN_TYPE: 'BUY',
   TXN_SHARES: '50.5561',
   TXN_PRICE: '$9.89',
   FUND: 'BOND FUND',
   INVESTOR: 'John Doe & Assoc. A Professional Corporation',
   SALES_REP: 'John Q. Public' },
 { TXN_DATE: '1/2/18',
   TXN_TYPE: 'BUY',
   TXN_SHARES: '151.6684',
   TXN_PRICE: '$9.89',
   FUND: 'BOND FUND',
   INVESTOR: 'John Doe, Jane Doe JTOWROS',
   SALES_REP: 'John Q. Public' },
 { TXN_DATE: '1/2/18',
   TXN_TYPE: 'BUY',
   TXN_SHARES: '533.049',
   TXN_PRICE: '$9.38',
   FUND: 'STOCK FUND',
   INVESTOR: 'Joe Smith',
   SALES_REP: 'Daryl "Moose" Johnston' }];

let total = 0;
data.forEach((d) => {
  total += parseFloat(d.TXN_PRICE.substr(1));
})
console.log(total);