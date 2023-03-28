const transactions = [
  {
    idTransaction: 1,
    storeLocation: 'Jakarta',
    userEmail: 'user1@example.com',
    purchaseMethod: 'credit card',
    items: [
      { name: 'item1', quantity: 2, price: 5000 },
      { name: 'item2', quantity: 1, price: 10000 },
    ],
  },
  {
    idTransaction: 2,
    storeLocation: 'Bandung',
    userEmail: 'user2@example.com',
    purchaseMethod: 'cash',
    items: [
      { name: 'item3', quantity: 3, price: 7500 },
    ],
  },
  {
    idTransaction: 3,
    storeLocation: 'Jakarta',
    userEmail: 'user3@example.com',
    purchaseMethod: 'debit card',
    items: [
      { name: 'item4', quantity: 1, price: 15000 },
      { name: 'item5', quantity: 2, price: 10000 },
    ],
  },
];

const transactionsByLocation = transactions.reduce((acc, transaction) => {
  const location = transaction.storeLocation;
  if (!acc[location]) {
    acc[location] = [];
  }
  acc[location].push(transaction);
  return acc;
}, {});

console.log('Data transaksi berdasarkan lokasi:', transactionsByLocation);

const profitsPerTransaction = transactions.map((transaction) => {
  const totalCost = transaction.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return { idTransaction: transaction.idTransaction, profit: totalCost };
});

console.log('Keuntungan per transaksi:', profitsPerTransaction);


const itemsPerTransaction = transactions.map((transaction) => {
  const totalItems = transaction.items.reduce((acc, item) => acc + item.quantity, 0);
  return { idTransaction: transaction.idTransaction, totalItems };
});

console.log('Jumlah barang per transaksi:', itemsPerTransaction);


const storeRatings = {};
transactions.forEach((transaction) => {
  const location = transaction.storeLocation;
  const totalCost = transaction.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const rating = totalCost > 10000 ? 'satisfied' : 'not satisfied';
  if (!storeRatings[location]) {
    storeRatings[location] = { satisfied: 0, notSatisfied: 0 };
  }
  storeRatings[location][rating]++;
});

console.log('Rating toko:', storeRatings);

const profitsByLocation = {};
for (const transaction of transactions) {
  const location = transaction.storeLocation;
  const totalCost = transaction.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const profit = totalCost * 0.2;
  if (!profitsByLocation[location]) {
    profitsByLocation[location] = 0;
  }
  profitsByLocation[location] += profit;
}

console.log('Profits by location:', profitsByLocation);