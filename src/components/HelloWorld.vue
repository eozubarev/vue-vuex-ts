<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <p>
            {{ userName }}
        </p>
        <p>
            {{ getInfo }}
        </p>
        <button @click="getUser">Get User</button>
        <p>{{ user }}</p>
    </div>
</template>

<style scoped>
p {
    font-size: 17px;
}
</style>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import store from "../store";
import {UserMutations} from "../store/user/mutations";

defineProps<{ msg: string }>()

const getInfo = computed(() => store.getters.getUserInfo)

let userName = computed({
  get(): string {
    return store.state.user.username
  },
  set(newValue: string): void {
    store.commit(UserMutations.SET_USERNAME, newValue)
  }
})

const user = ref([])
const getUser = () => {
    store.dispatch('loadAPIResult').then(data => user.value = data)
}

// setTimeout(() => {
//   userName.value = 'asgsadgasg'
// }, 3000)

</script>
