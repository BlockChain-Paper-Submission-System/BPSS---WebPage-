<template>
  <div class="home">
    <div class="backgroud">
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
    width: 50%;
  }
  img {
    width: 70%;
  }
}
.backgroud {
  max-width: 70vw;
  min-width: 500px;
  margin: 0 auto;
  background: url("../assets/BGBC.jpg") center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
}
.intro {
  margin: 0 auto;
  background-color: white;
  max-width: 70vw;
  h2 {
    padding: 1rem;
  }
  img {
    width: 70%;
  }
}
</style>
