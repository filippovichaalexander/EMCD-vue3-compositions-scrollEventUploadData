<script setup>
import UserComponent from './components/UserComponent.vue'

import {ref, onBeforeMount, onMounted, onUnmounted} from 'vue'


import fetchUsers from './compositions/useGetUsers.js';

const users = ref({
  users: []
  })
  
  /**
   * Fetches additional users and appends them to the existing list
   * @param {number} [amount=10] - The number of additional users to fetch (optional, default is 10)
   * @returns {Promise<void>} - A promise that resolves once the users are fetched and appended
   */
  const loadMoreUsers = async (amount = 10) => {
    const newUsers = await fetchUsers(amount); // Fetch new users
    users.value.users = [...users.value.users, ...newUsers];
  }
  onBeforeMount(async () => {
    await loadMoreUsers()
  });

  onMounted(() => {
    const usersContainer = document.getElementById('users');
    usersContainer.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    const usersContainer = document.getElementById('users');
    usersContainer.removeEventListener('scroll', handleScroll);
  });

  /**
   * Handler for the scroll event on the users container
   */
  const handleScroll = async () => {
    const users = document.getElementById('users');
  const isAtBottom = users.scrollHeight - users.scrollTop <= users.clientHeight + 100; // Ad
    if (isAtBottom) {
      await loadMoreUsers();
    }
  };
</script>

<template>
  <main>
    <div id="users" class="users" 
      >
      <UserComponent
        v-for="(user, idx) in users.users" 
        :key="idx + user?.id?.value" 
        :name="user.name.first"
        :picture="user.picture.medium"
        :email="user.email"/>
    </div>
  </main>
</template>

<style scoped>
  .users {
    width: 80%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: rgb(227, 227, 227);
    color: black;
    overflow-y: scroll;
  }
</style>
