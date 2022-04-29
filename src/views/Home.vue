<template>
  <main class="">
    <h3 class="title">結帳</h3>
    <div class="left-content">
      <!-- 購物流程 -->
      <StepControl :current-step="currentStep" />

      <!-- 流程頁面 -->
      <SendingAddress
        v-if="currentStep === 1"
        @get-address-information="getAddressInformation"
      />
      <ShippingMethod
        v-else-if="currentStep === 2"
        @get-shipping-information="getShippingInformation"
      />
      <PayingInformation
        v-else
        @get-paying-information="getPayingInformation"
      />
    </div>
    <!-- 購物車資訊 -->
    <ShoppingCart :shipping-fee="orderInformation.shippingFee" />

    <div class="button-control mt-5">
      <button v-show="currentStep !== 1" @click="lastStep" class="btn-outline">
        ← 上一步
      </button>
      <button
        v-show="currentStep !== 3"
        @click="nextStep"
        class="btn-primary"
        :class="{ 'first-step': currentStep === 1 }"
      >
        下一步 →
      </button>
      <button
        v-show="currentStep === 3"
        class="btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        送出表單 →
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">訂單資料</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{{ orderInformation }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@charset "UTF-8";
/* 載入字體 */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap");
/* reset css */
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}

ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.btn,
button,
button:focus,
input:focus,
textarea:focus,
select,
select:focus,
a:focus {
  outline: 0px !important;
}

button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

button[disabled] {
  pointer-events: none;
}

input {
  padding: 0;
}

input:required {
  box-shadow: none;
}

input:invalid {
  box-shadow: none;
}

::-webkit-scrollbar {
  /* make scrollbar transparent */
  width: 0px;
  background: transparent;
}

.w-25 {
  width: 25%;
}

.w-50 {
  width: 50%;
}

.w-75 {
  width: 75%;
}

.w-100 {
  width: 100%;
}

.h-25 {
  height: 25%;
}

.h-50 {
  height: 50%;
}

.h-75 {
  height: 75%;
}

.h-100 {
  height: 100%;
}

.m-0 {
  margin: 0;
}

.mt-0 {
  margin-top: 0;
}

.mr-0 {
  margin-right: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.ml-0 {
  margin-left: 0;
}

.mx-0 {
  margin-right: 0;
  margin-left: 0;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.m-1 {
  margin: 0.25rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mx-1 {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.m-2 {
  margin: 0.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mx-2 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.m-3 {
  margin: 0.75rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mx-3 {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.m-4 {
  margin: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-4 {
  margin-left: 1rem;
}

.mx-4 {
  margin-right: 1rem;
  margin-left: 1rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.m-5 {
  margin: 1.25rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mr-5 {
  margin-right: 1.25rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.mx-5 {
  margin-right: 1.25rem;
  margin-left: 1.25rem;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.m-6 {
  margin: 1.5rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.ml-6 {
  margin-left: 1.5rem;
}

.mx-6 {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.m-7 {
  margin: 1.75rem;
}

.mt-7 {
  margin-top: 1.75rem;
}

.mr-7 {
  margin-right: 1.75rem;
}

.mb-7 {
  margin-bottom: 1.75rem;
}

.ml-7 {
  margin-left: 1.75rem;
}

.mx-7 {
  margin-right: 1.75rem;
  margin-left: 1.75rem;
}

.my-7 {
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
}

.m-8 {
  margin: 2rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mr-8 {
  margin-right: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.ml-8 {
  margin-left: 2rem;
}

.mx-8 {
  margin-right: 2rem;
  margin-left: 2rem;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.p-0 {
  padding: 0;
}

.pt-0 {
  padding-top: 0;
}

.pr-0 {
  padding-right: 0;
}

.pb-0 {
  padding-bottom: 0;
}

.pl-0 {
  padding-left: 0;
}

.px-0 {
  padding-right: 0;
  padding-left: 0;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.p-1 {
  padding: 0.25rem;
}

.pt-1 {
  padding-top: 0.25rem;
}

.pr-1 {
  padding-right: 0.25rem;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

.pl-1 {
  padding-left: 0.25rem;
}

.px-1 {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.p-2 {
  padding: 0.5rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.px-2 {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.pt-3 {
  padding-top: 0.75rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pb-3 {
  padding-bottom: 0.75rem;
}

.pl-3 {
  padding-left: 0.75rem;
}

.px-3 {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pl-4 {
  padding-left: 1rem;
}

.px-4 {
  padding-right: 1rem;
  padding-left: 1rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pr-5 {
  padding-right: 1.25rem;
}

.pb-5 {
  padding-bottom: 1.25rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.px-5 {
  padding-right: 1.25rem;
  padding-left: 1.25rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.p-6 {
  padding: 1.5rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.pr-6 {
  padding-right: 1.5rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.pl-6 {
  padding-left: 1.5rem;
}

.px-6 {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.p-7 {
  padding: 1.75rem;
}

.pt-7 {
  padding-top: 1.75rem;
}

.pr-7 {
  padding-right: 1.75rem;
}

.pb-7 {
  padding-bottom: 1.75rem;
}

.pl-7 {
  padding-left: 1.75rem;
}

.px-7 {
  padding-right: 1.75rem;
  padding-left: 1.75rem;
}

.py-7 {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}

.p-8 {
  padding: 2rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pr-8 {
  padding-right: 2rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pl-8 {
  padding-left: 2rem;
}

.px-8 {
  padding-right: 2rem;
  padding-left: 2rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

html {
  font-size: 16px;
  height: 100%;
}

body {
  height: 100%;
  background: #f8f7fc;
  color: #2a2a2a;
  font-family: "Noto Sans TC", sans-serif;
}

.d-none {
  display: none;
}

.d-inline {
  display: inline;
}

.d-inline-block {
  display: inline-block;
}

.d-block {
  display: block;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.justify-content-start {
  justify-content: flex-start;
}

.justify-content-end {
  justify-content: flex-end;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-around {
  justify-content: space-around;
}

.align-content-start {
  align-content: flex-start;
}

.align-content-end {
  align-content: flex-end;
}

.align-content-center {
  align-content: center;
}

.align-items-start {
  align-items: flex-start;
}

.align-items-end {
  align-items: flex-end;
}

.align-items-center {
  align-items: center;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.cursor-pointer {
  cursor: pointer;
}

.scrollbar::-webkit-scrollbar {
  width: 6px;
}
.scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.paying-information .form-row > select,
.paying-information .form-row > input,
.sending-address .form-row > select,
.sending-address .form-row > input {
  padding-left: 16px;
  width: 100%;
  height: 40px;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
}

.paying-information .form-row > label,
.sending-address .form-row > label {
  display: flex;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 700;
  color: #808080;
}

.button-control .btn-primary {
  padding: 14.5px 0;
  border-radius: 5px;
  background: #f67599;
  color: #fff;
  font-size: 14px;
}
.button-control .btn-primary:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}

/* style from here */
.container {
  width: 70%;
  margin: 0 auto;
}

main {
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(auto, 540px) 1fr minmax(auto, 440px);
}

main .title {
  display: flex;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
}

.left-content {
  grid-column: 1/2;
}

.step-control {
  display: flex;
  justify-content: space-between;
}
.step-control .step-container {
  display: flex;
  align-items: center;
  position: relative;
}
.step-control .step-container .circle-container {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #2a2a2a;
  opacity: 0.3;
}

select:invalid {
  color: #747474;
}

.label-container {
  margin-left: 10px;
  font-size: 1.1rem;
  font-weight: 700;
}

.step-control .step-container .step-one {
  background: #333;
  color: #fff;
  opacity: 1;
}

.step-control .step-container.checked .circle-container {
  background: #333;
  color: #fff;
  opacity: 1;
}
.step-control .step-container.checked .circle-container::after {
  content: "✔";
}
.step-control .step-container.active .circle-container {
  opacity: 1;
}

.step-control .connect-line {
  flex: 1;
  position: relative;
  top: 16px;
  height: 2px;
  transform: scale(0.6, 0.6);
  background: #000;
  opacity: 0.3;
}
.step-control .connect-line.active {
  opacity: 1;
}

.sending-address {
  position: relative;
}
.sending-address .form-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.sending-address .form-row {
  margin-bottom: 1rem;
  width: 100%;
}
.sending-address .form-row.ta-gender {
  width: 130px;
}
.sending-address .form-row.name {
  width: 160px;
}

.shipping-method {
  position: relative;
}
.shipping-method .form-row {
  position: relative;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
}
.shipping-method .form-row:hover {
  border: 1px solid black;
}
.shipping-method .form-row input[type="radio"] {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
}
.shipping-method .form-row input[type="radio"]:checked {
  box-shadow: inset 0 0 0 5px #000;
}
.shipping-method .form-row label {
  height: 100%;
  margin-top: 15px;
  margin-left: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  cursor: pointer;
}

.shipping-method .form-row label .shipping {
  font-size: 16px;
  font-weight: 700;
}
.shipping-method .form-row label .time,
.shipping-method .form-row label .price {
  font-size: 12px;
}
.shipping-method .form-row label .price {
  position: absolute;
  top: 12px;
  right: 12px;
}

.paying-information {
  position: relative;
}
.sending-address .sending-address-title,
.shipping-method .shipping-method-title,
.paying-information .paying-information-title {
  display: flex;
  margin: 2rem 0;
}
.paying-information .form-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.paying-information .form-row {
  width: 100%;
  margin-bottom: 1rem;
}
.paying-information .form-row.expiration-date {
  width: 160px;
}
.paying-information .form-row.cvc {
  width: 160px;
}

main .left-content .form-row.form-row-width-160 {
  width: 160px;
}
main .left-content .form-row.form-row-width-255 {
  width: 255px;
}
main .left-content .form-row.form-row-width-350 {
  width: 350px;
}
main .left-content .shipping-method .form-row {
  width: 435px;
}
main .right-content {
  grid-column: 3/4;
}

.product-pannel {
  margin-top: 0;
  border: 1px solid #f0f0f5;
  border-radius: 5px;
  padding: 32px 24px 0;
}
.product-pannel .shopping-cart-title {
  display: flex;
  margin-bottom: 32px;
  font-size: 20px;
  font-weight: 700;
}
.product-pannel .card-wrapper .cart-card {
  display: flex;
  justify-content: space-between;
}
.product-pannel .card-wrapper .cart-card .card-img {
  width: 100px;
  height: 100px;
}
.product-pannel .card-wrapper .cart-card .card-information {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.product-pannel .card-wrapper .cart-card .card-information .product-name {
  font-size: 16px;
  font-weight: 400;
  color: #2a2a2a;
}
.product-pannel
  .card-wrapper
  .cart-card
  .card-information
  .product-number
  button {
  width: 26px;
  height: 26px;
  background: #f0f0f5;
  border-radius: 50%;
  font-size: 20px;
}
.product-pannel
  .card-wrapper
  .card
  .card-information
  .product-number
  button.minus {
  line-height: 26px;
}
.product-pannel
  .card-wrapper
  .cart-card
  .card-information
  .product-number
  .number {
  margin: 0 24px;
}
.product-pannel .card-wrapper .shipping-fee,
.product-pannel .card-wrapper .subtotal {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 60px;
}
.product-pannel .card-wrapper .shipping-fee {
  border-top: 1px solid #f0f0f5;
  border-bottom: 1px solid #f0f0f5;
}

.button-control {
  border-top: 1px solid #e6e6eb;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
}
.button-control .btn-outline {
  font-size: 14px;
}
.button-control .btn-outline:hover {
  font-size: 15px;
  font-weight: 700;
}
.button-control .btn-primary {
  width: 160px;
}
.button-control .first-step {
  position: relative;
  left: 100%;
  transform: translateX(-100%);
  width: 160px;
}
</style>

<script>
import ShoppingCart from "../components/ShoppingCart.vue";
import StepControl from "../components/StepControl.vue";
import PayingInformation from "../components/PayingInformation.vue";
import SendingAddress from "../components/SendingAddress.vue";
import ShippingMethod from "../components/ShippingMethod.vue";

export default {
  components: {
    ShoppingCart,
    StepControl,
    PayingInformation,
    SendingAddress,
    ShippingMethod,
  },
  data() {
    return {
      orderInformation: {
        gender: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        shippingFee: 0,
        cardName: "",
        cardNumber: "",
        due: "",
        cvc: "",
      },
      currentStep: 1,
    };
  },
  methods: {
    // 將地址資料傳入父元件
    getAddressInformation(addressInformation) {
      this.orderInformation = {
        ...this.orderInformation,
        ...addressInformation,
      };
    },
    // 將運費資料傳入父元件
    getShippingInformation(shippingInformation) {
      this.orderInformation = {
        ...this.orderInformation,
        ...shippingInformation,
      };
    },
    // 將付款資料傳入父元件
    getPayingInformation(payingInformation) {
      this.orderInformation = {
        ...this.orderInformation,
        ...payingInformation,
      };
    },
    nextStep() {
      if (this.currentStep !== 3) {
        this.currentStep += 1;
      }
    },
    lastStep() {
      if (this.currentStep !== 1) {
        this.currentStep -= 1;
      }
    },
  },
};
</script>