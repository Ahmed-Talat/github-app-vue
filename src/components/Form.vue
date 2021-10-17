<template>
    <form @submit="handleSubmit" class="form-background-color row">
        <div class="col-6">
          <input 
            class="form-control"
            type="text"
            v-model="userName"
            placeholder="GitHub username" 
            required 
          />
        </div>
        <div class="col-2 ms-3"> 
          <button class = "form-control btn btn-secondary ">Add card</button>
        </div>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: 'Form',
    data() {
        return {
           userName: ''
         };
    },  
    props: ['onSubmit'],
    methods: {
        async handleSubmit(event) {
            event.preventDefault();
            const resp = await axios.get(`https://api.github.com/users/${this.userName}`);
            this.$store.commit('addNewProfile', resp.data);
            this.userName = '';
        }
    }
}
</script>

<style>
.form-background-color {
  min-height: 100px;
  background-color: rgba(192, 192, 192, 0.3);
}

.mainClass {
  min-height: 500px;
  background-color: rgba(192, 192, 192, 0.3);
}

</style>
