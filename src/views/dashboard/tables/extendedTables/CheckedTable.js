
export default {
  name: 'CheckedTable',

  data: () => ({
    headers: [
      {
        text: '#',
        value: 'id'
      },
      {
        text: 'Product Name',
        value: 'name'
      },
      {
        text: 'Type',
        value: 'type'
      },
      {
        align: 'right',
        text: 'Qty',
        value: 'qty'
      },
      {
        align: 'right',
        text: 'Price',
        value: 'price'
      },
      {
        align: 'right',
        text: 'Amount',
        value: 'amount'
      }
    ],
    selections: [
      {
        id: 1,
        name: 'Moleskine Agenda',
        type: 'Office',
        qty: 25,
        price: '€ 49',
        amount: '€ 1,225'
      },
      {
        id: 2,
        name: 'Stabilo Pen',
        type: 'Office',
        qty: 30,
        price: '€ 10',
        amount: '€ 300'
      },
      {
        id: 3,
        name: 'A4 Paper Pack',
        type: 'Office',
        qty: 30,
        price: '€ 10.99',
        amount: '€ 109'
      },
      {
        id: 4,
        name: 'Apple iPad',
        type: 'Meeting',
        qty: 10,
        price: '€ 499',
        amount: '€ 4,990'
      },
      {
        id: 5,
        name: 'Apple iPhone',
        type: 'Communication',
        qty: 10,
        price: '€ 599',
        amount: '€ 5,999'
      }
    ]
  })
}
