<template>
  <div class="right-content">
    <section class="product-pannel">
      <div class="shopping-cart-title">購物籃</div>
      <div class="card-wrapper">
        <div v-for="item in cartItems" :key="item.id" class="cart-card mb-5">
          <div class="card-img">
            <img :src="item.img" alt="product-picture" />
          </div>
          <div class="card-information">
            <h3 class="product-name">{{ item.name }}</h3>
            <div class="product-number">
              <button class="minus" @click="removeOneItem(item)">─</button>
              <span class="number">{{ item.number }}</span>
              <button class="plus" @click="addOneItem(item)">+</button>
            </div>
            <div class="product-price" style="font-weight: 700">
              ${{ (item.price * item.number).toLocaleString() }}
            </div>
          </div>
        </div>

        <div class="shipping-fee mt-5">
          <span>運費</span>
          <span style="font-weight: 700">{{
            shippingFee == 0 ? "免費" : "$ " + 500
          }}</span>
        </div>
        <div class="subtotal">
          <span>小計</span>
          <span class="subtotal-price" style="font-weight: 700"
            >${{ totalPrice.toLocaleString() }}</span
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    name: "破壞補釘修身牛仔褲",
    img: "https://upload.cc/i1/2022/04/27/L35EYT.png",
    price: 3999,
    number: 0,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    img: "https://upload.cc/i1/2022/04/27/9fOnQg.png",
    price: 1299,
    number: 0,
  },
];

export default {
  name: "ShoppingCart",
  props: {
    shippingFee: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cartItems: [
        {
          id: "",
          name: "",
          img: "",
          price: "",
          number: "",
        },
      ],
      totalPrice: 0,
      totalProductPrice: 0,
    };
  },
  created() {
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      this.cartItems = [...dummyData];
    },
    addOneItem(item) {
      item.number += 1;
    },
    removeOneItem(item) {
      if (item.number > 0) {
        item.number -= 1;
      }
    },
    countTotalPrice() {
      let productPrice = this.cartItems.map((item) => item.price * item.number);
      this.totalProductPrice = 0;
      for (let i = 0; i < productPrice.length; i++) {
        this.totalProductPrice += productPrice[i];
      }
      this.totalPrice = this.totalProductPrice + this.shippingFee;
    },
  },
  watch: {
    cartItems: {
      handler: function () {
        this.countTotalPrice();
      },
      deep: true,
    },
    shippingFee: {
      handler: function () {
        this.countTotalPrice();
      },
      deep: true,
    },
  },
};
</script>