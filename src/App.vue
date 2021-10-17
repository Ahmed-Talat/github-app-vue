<template>
  <div class="container">
      <div className="header"></div>
      <Form />
      <CardList />
  </div>
</template>

<script>
import CardList from './components/CardList.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    CardList,
    Form
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.header {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    331deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  background-attachment: fixed;
}

form {
  border: thin solid #888;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

</style>
