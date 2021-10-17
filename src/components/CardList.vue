<template>
    <div class="border mainClass">
        <Card v-for="profile in profiles" :key="profile.id" :profile="profile"/>
    </div>
</template>

<script>
import Card from './Card.vue';
export default {
    name: 'CardList',
    components: { Card },
    computed: {
      profiles() {
        return this.$store.state.profiles;
      }
    }
}
</script>

<style>
.github-profile {
  margin: 1rem;
}

.info {
  display: inline-block;
  margin-left: 12px;
}

.name {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
