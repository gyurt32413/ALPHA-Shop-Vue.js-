<template>
  <div class="step-control">
    <div
      class="step-container"
      :class="[{ active: currentStep === 1 }, { checked: currentStep !== 1 }]"
    >
      <div class="circle-container step-one">{{currentStep === 1 ? 1:''}}</div>
      <div class="label-container">寄送地址</div>
    </div>
    <div class="connect-line"></div>
    <div
      class="step-container"
      :class="[{ active: currentStep === 2 }, { checked: currentStep === 3 }]"
    >
      <div class="circle-container">{{currentStep === 1 ||currentStep === 2 ? 2:''}}</div>
      <div class="label-container">運送方式</div>
    </div>
    <div class="connect-line"></div>
    <div class="step-container" :class="{ active: currentStep === 3 }">
      <div class="circle-container">3</div>
      <div class="label-container">付款資訊</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
};
</script>