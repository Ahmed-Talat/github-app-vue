<template>
  <div class="github-profile">
    <img :src="profile.avatar_url" alt='avatar' />
    <div class="info">
        <div class="name">{{profile.name}}</div>
        <div class="company">{{profile.company}}</div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['profile'],
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

img {
  width: 75px;
}
</style>
