
export default {
  name: 'ShoppingCartTable',

  data: () => ({
    productHeaders: [
      {
        sortable: false,
        text: '',
        value: 'src'
      },
      {
        text: 'Product',
        value: 'name'
      },
      {
        text: 'Color',
        value: 'color'
      },
      {
        text: 'Size',
        value: 'size'
      },
      {
        align: 'right',
        text: 'Price',
        value: 'price'
      },
      {
        text: 'Qty',
        value: 'qty'
      },
      {
        align: 'right',
        text: 'Amount',
        value: 'amount'
      }
    ],
    products: [
      {
        src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/product1.jpg',
        name: 'Spring Jacket',
        brand: 'Dolce & Gabbana',
        color: 'Red',
        size: 'M',
        price: '€ 549',
        amount: '€ 549',
        qty: 1
      },
      {
        src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/product2.jpg',
        name: 'Short Pants',
        brand: 'Pucca',
        color: 'Purple',
        size: 'M',
        price: '€ 499',
        amount: '€ 499',
        qty: 2
      },
      {
        src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/product3.jpg',
        name: 'Pencil Skirt',
        brand: 'Valentino',
        color: 'White',
        size: 'XL',
        price: '€ 799',
        amount: '€ 799',
        qty: 1
      }
    ]
  })
}
