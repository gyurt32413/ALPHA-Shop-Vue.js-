<template>
  <section @change="getAddressInformation" class="sending-address">
    <h1 class="sending-address-title">寄送地址</h1>
    <div class="form-container">
      <div class="form-row form-row-width-160 ta-gender d-inline-block">
        <label for="">稱謂</label>
        <select
          v-model="addressInformation.gender"
          name="ta-gender"
          id="ta-gender"
          required
        >
          <option value="" class="invalid" disabled selected>請選擇稱謂</option>
          <option :value="'先生'">先生</option>
          <option :value="'女士'">女士</option>
          <option :value="'不拘'">不拘</option>
        </select>
      </div>
      <div class="form-row form-row-width-350 name">
        <label for="">姓名</label>
        <input
          v-model="addressInformation.name"
          type="text"
          placeholder="請輸入姓名"
        />
      </div>
      <div class="form-row form-row-width-255">
        <label for="">電話</label>
        <input
          v-model="addressInformation.phone"
          type="text"
          placeholder="請輸入行動電話"
        />
      </div>
      <div class="form-row form-row-width-255 mt-1">
        <label for="">Email</label>
        <input
          v-model="addressInformation.email"
          type="text"
          placeholder="請輸入電子郵件"
        />
      </div>
      <div class="form-row form-row-width-160">
        <label for="">縣市</label>
        <select
          v-model="addressInformation.city"
          name="city"
          id="city"
          class="scrollbar"
          required
        >
          <option value="" class="invalid" disabled selected>請選擇縣市</option>
          <option :value="'基隆市'">基隆市</option>
          <option :value="'臺北市'">臺北市</option>
          <option :value="'新北市'">新北市</option>
          <option :value="'宜蘭縣'">宜蘭縣</option>
          <option :value="'桃園市'">桃園市</option>
          <option :value="'新竹縣'">新竹縣</option>
          <option :value="'新竹市'">新竹市</option>
          <option :value="'苗栗縣'">苗栗縣</option>
          <option :value="'臺中市'">臺中市</option>
          <option :value="'彰化縣'">彰化縣</option>
          <option :value="'南投縣'">南投縣</option>
          <option :value="'雲林縣'">雲林縣</option>
          <option :value="'嘉義市'">嘉義市</option>
          <option :value="'嘉義縣'">嘉義縣</option>
          <option :value="'臺南市'">臺南市</option>
          <option :value="'高雄市'">高雄市</option>
          <option :value="'屏東縣'">屏東縣</option>
          <option :value="'澎湖縣'">澎湖縣</option>
          <option :value="'臺東縣'">臺東縣</option>
          <option :value="'花蓮縣'">花蓮縣</option>
          <option :value="'金門縣'">金門縣</option>
          <option :value="'連江縣'">連江縣</option>
        </select>
      </div>
      <div class="form-row form-row-width-350">
        <label for="">地址</label>
        <input
          v-model="addressInformation.address"
          type="text"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SendingAddress",
  data() {
    return {
      addressInformation: {
        gender: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
      },
    };
  },
  methods: {
    getAddressInformation() {
      this.$emit('get-address-information', this.addressInformation)
    }
  }
};
</script>


