const productsList = [
  {
    name: 'Waffle',               
    category: 'Waffle with Berries', 
    price: '$6.50',               
    className: 'info-about-waffle', 
    className2: 'order1'
  },
  {
    name: 'Crème Brûlée',
    category: 'Vanilla Bean Crème Brûlée',
    price: '$7.00',
    className: 'info-about-crème-brûlée',
     className2: 'order1'
  },
  {
    name: 'Macaron',
    category: 'Macaron Mix of Five',
    price: '$8.00',
    className: 'info-about-macaron',
    className2: 'order1'
  },
  {
    name: 'Tiramisu',
    category: 'Classic Tiramisu',
    price: '$5.50',
    className: 'info-about-tiramisu',
    className2: 'order1'
  },
  {
    name: 'Baklava',
    category: 'Pistachio Baklava',
    price: '$4.00',
    className: 'info-about-baklava',
    className2: 'order1'
  },
  {
    name: 'Pie',
    category: 'Lemon Meringue Pie',
    price: '$5.00',
    className: 'info-about-pie',
    className2: 'order1'
  },
  {
    name: 'Cake',
    category: 'Red Velvet Cake',
    price: '$4.50',
    className: 'info-about-cake',
    className2: 'order1'
  },
  {
    name: 'Brownie',
    category: 'Salted Caramel Brownie',
    price: '$5.50',
    className: 'info-about-brownie',
    className2: 'order1'
  },
  {
    name: 'Panna Cotta',
    category: 'Vanilla Panna Cotta',
    price: '$6.50',
    className: 'info-about-pannacotta',
    className2: 'order1'
  }
];
for (const product of productsList) {
  const infoElement = document.querySelector(`.${product.className}`);
  infoElement.innerHTML += `
  <h6 class="dessert-name">${product.name}</h6>
  <h5 class="contents">${product.category}</h5>
  <span class="price">${product.price}</span>
`;
}
const addBtns = document.querySelectorAll('.add-btn')

let shopAdd = 1;
for (const btn of addBtns) {
  btn.addEventListener('click', function() {
    btn.classList.add('add-btn-none')
    btn.innerHTML = `<img src="assets/img/+ icon.svg" alt="s" class="image-btn-add"><span id = "number">${shopAdd}</span><img src="assets/img/- icon.svg" class = "image-btn-dgs"></img>`
    const spanNumber = btn.querySelector('.number')
    const imgAddBtn = btn.querySelector('.image-btn-add')
    console.log('eklenio mu')
    shopAdd = 1
    spanNumber.innerText = shopAdd
      // const OrderListİtems = document.querySelector('.order-list-item')
      // OrderListİtems.innerHTML += `
      // <div>
      //   <h6></h6>
      //   <h4><p>1x</p><span> @ 5.50</span><strong>$5.50</strong></h4>
      //   </div>
      //   <div>
      //   <button>X</button>
      // </div>
      // `
      // index++
      imgAddBtn.addEventListener('click',function(e) {
        e.stopPropagation();
        console.log('neden olmuyor')
        shopAdd++
        spanNumber.innerText = shopAdd
        // number++
      }
    )
    const imgBtnDgs = btn.querySelector('.image-btn-dgs')
    imgBtnDgs.addEventListener('click', function(e) {
      e.stopPropagation();
      shopAdd--
      spanNumber.innerText = shopAdd
      if(shopAdd <= 0) {
        shopAdd = 1
        spanNumber.innerText = shopAdd
      }
    })
    
  }
  )
}
// let cart = [] 
// let totalPrice = 0;
// function addToCart(productCatagory,price) {
//   cart.push({name:productCatagory,price:price,quandity:1})
//   totalPrice += price 
//   updateCart()
// }
// function updateCart() {
//   const cartDiv = cartdiv
//   const totalPriceEl = totalpriceel
//   cartDiv.innerHTML = '' 
//   cart.forEach(item => {
//   const itemDiv = document.createElement('div')
//   itemDiv.textContent = `${item.name} - $${item.price} - ${item.quandity}`
//   cartDiv.appendChild(itemDiv)
//   })
//  totalPriceEl.textContent = `Toplam fiyat: $${totalPrice}`
// } 

let cart = [];
let totalPrice = 0;

function addToCart(productCategory, price, quantity) {
  const existingItem = cart.find(item => item.name === productCategory);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name: productCategory, price: price, quantity: quantity });
  } 
  totalPrice += price * quantity;
  updateCart();
}

function updateCart() {
  const cartDiv = document.querySelector('.order-list-item');  
  cartDiv.innerHTML = '';  
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('flex');  
    
    itemDiv.innerHTML = `
      <div>
        <h6>${item.name}</h6>
        <h4><p>${item.quantity}x</p><span> @ $${item.price}</span><strong>$${(item.price * item.quantity)}</strong></h4>
      </div>
      <div>
        <button class="remove-btn">X</button>
      </div>
    `;
    cartDiv.appendChild(itemDiv);  
    const removeBtns = document.querySelectorAll('.remove-btn')
    for (const removeBtn of removeBtns) {
      removeBtn.addEventListener('click', function () {
         this.parentElement.parentElement.remove();
        const itemIndex = Array.from(removeBtns).indexOf(this);
         cart.splice(itemIndex,1)
        updateCart()
      })
    }
  });
}


