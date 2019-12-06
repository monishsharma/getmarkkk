<template>
  <div id="app">
    <Navbar />
    <Maps />
    <Card />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/UI/NavBar/NavBar.vue";
import Maps from "./components/UI/Maps/Maps.vue";
import Card from "./components/UI/Card/Card.vue";
import Footer from "./components/UI/Footer/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Maps,
    Card,
    Footer
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: black;
  overflow-x: hidden ;
}
</style>
