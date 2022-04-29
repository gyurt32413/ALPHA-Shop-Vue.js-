<template>
  <section @change="getAddressInformation" class="shipping-method">
    <h1 class="shipping-method-title">運送方式</h1>
    <div class="form-row mb-6">
      <input
        v-model="shippingInformation.shippingFee"
        :value="0"
        name="shipping-method"
        type="radio"
        id="standard"
      />
      <label for="standard">
        <div class="shipping">標準運送</div>
        <div class="time">約3~7個工作天</div>
        <div class="price">免費</div>
      </label>
    </div>
    <div class="form-row">
      <input
        v-model="shippingInformation.shippingFee"
        :value="500"
        name="shipping-method"
        type="radio"
        id="DHL"
      />
      <label for="DHL">
        <div class="shipping" style="font-weight: 700">DHL 貨運</div>
        <div class="time">48小時內送達</div>
        <div class="price">$500</div>
      </label>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShippingMethod",
  data() {
    return {
      shippingInformation: {
        shippingFee: 0,
      },
    };
  },
  methods: {
    getAddressInformation() {
      this.$emit('get-shipping-information', this.shippingInformation)
    }
  }
};
</script>