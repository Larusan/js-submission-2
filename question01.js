//UKI - JavaScript Assignment - 2
//Question 01

let transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 30 },
];

function groupByType(transactions) {
  let grouped = {};

  grouped.deposit = [
    ...transactions.filter((transactions) => {
      return transactions.type === "deposit";
    }),
  ];


  grouped.withdrawal = [
    ...transactions.filter((transactions) => {
      return transactions.type === "withdrawal";
    }),
  ];

  return grouped;
}

console.log(groupByType(transactions));
