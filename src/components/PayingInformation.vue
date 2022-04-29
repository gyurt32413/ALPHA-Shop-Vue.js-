<template>
  <section @change="getPayingInformation" class="paying-information">
    <h1 class="paying-information-title">付款資訊</h1>
    <div class="form-container">
      <div class="form-row form-row-width-350">
        <label for="">持卡人姓名</label>
        <input
          v-model="payingInformation.cardName"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div class="form-row form-row-width-350">
        <label for="">卡號</label>
        <input
          v-model="payingInformation.cardNumber"
          type="text"
          placeholder="1111 2222 3333 4444"
          onkeyup="value=value.replace(/[^\d]/g,'') "
          maxlength="16"
        />
      </div>
      <div class="form-row form-row-width-255 d-inline-block expiration-date">
        <label for="">有效期限</label>
        <input v-model="payingInformation.due" type="month" />
      </div>
      <div class="form-row form-row-width-255 d-inline-block cvc mt-1">
        <label for="">CVC/CCV</label>
        <input
          v-model="payingInformation.cvc"
          type="text"
          placeholder="123"
          maxlength="3"
          onkeyup="value=value.replace(/[^\d]/g,'') "
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PayingInformation",
  data() {
    return {
      payingInformation: {
        cardName: "",
        cardNumber: "",
        due: "",
        cvc: "",
      },
    };
  },
  methods: {
    getPayingInformation() {
      this.$emit("get-paying-information", this.payingInformation);
    },
  },
};
</script>