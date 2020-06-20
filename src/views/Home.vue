<template>
  <div class="home">
    <div class="backgroud">
      <div class="filter"> 
      <h1 class="title">BlockChain Paper Submission System</h1>
      <h2 class="subTitle">Powered by</h2>
      <div class="tech">
        <img id="vue" src="../assets/logo.png" alt />
      </div>
      <div class="tech">
        <img src="../assets/hf.png" alt />
      </div>
      <div class="tech">
        <img src="../assets/node.png" alt />
      </div>
      </div>
    </div>
    <div class="intro">
      <h2>Why BPSS?</h2>
      <p>-------</p>
      <h2>Architecture diagram</h2>
      <img src="../assets/arch.png" alt />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap');
@keyframes init {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}
%title {
  color: antiquewhite;
  padding: 1rem;
  font-family: 'MuseoModerno', cursive;
}
.title {
  animation: init 1.5s;
  padding-top: 5rem;
  @extend %title;
}
.subTitle {
  animation: init 3.5s;
  @extend %title;
}
.tech {
  animation: init 5s;
  display: inline-block;
  width: 30%;
  #vue {
    width: 30%;
  }
  img {
    width: 42%;
  }
}
.backgroud {
  width: 100vw;
  // max-width: 70vw;
  // min-width: 500px;
  margin: 0 auto;
  background: url("../assets/BGBC.jpg") center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
}
.filter{
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
}
.intro {
  margin: 0 auto;
  background-color: white;
  max-width: 100vw;
  h2 {
    padding: 1rem;
  }
  img {
    width: 70%;
  }
}
</style>
