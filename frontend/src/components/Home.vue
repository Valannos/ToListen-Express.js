<template>
  <div class="container">
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/#">Home</b-nav-item>
      <b-nav-item ><router-link to="/genres">Genres</router-link></b-nav-item>          
    </b-navbar-nav>
  </b-navbar>
</div>
<div class="text-center">
  <img  src="../assets/logo.png"  alt="Vue logo"/>
</div>

<router-view></router-view>
</div>
</template>

<script>


export default {

  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      active: ''
    }
  },
  methods : {
    clicked(event) {
      console.log(event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
