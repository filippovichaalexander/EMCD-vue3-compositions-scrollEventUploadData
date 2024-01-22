<script setup>
  const props = defineProps({
    name: {
      type: String
    },
    picture: {
      type: String
    },
    email: {
      type: String
    }
  })
</script>

<template>
  <div class="user">
    <p class="user__name">{{name}}</p>
    <img class="user__picture" :src="picture" alt="User's Picture">
    <p class="user__email">{{email}}</p>
  </div>
</template>

<style scoped lang="scss">
  .user {
    max-width: 250px;
    width: 100%;
    color: black;
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 12px;
    &__name {
      padding-bottom: 10px;
      font-size: 18px;
      font-weight: 500;
    }
    &__email {
      padding-top: 10px;
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
      word-wrap: break-word;
    }
  }
</style>