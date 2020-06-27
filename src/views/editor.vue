<template>
  <div class="editor">
      <button class="btn btn-primary" @click="assign=!assign">switch</button>
      <br>
      <br>
      <div class="assign" v-if="assign">
          <form>
              <div class="form-group">
              <label for="txId">Transaction ID (Paper)</label>
              <input type="text" class="form-control" id="txId" placeholder="Transaction ID">
            </div>
            <div class="form-group">
              <label for="Reviewer">Reviewer1</label>
              <input type="text" class="form-control" id="Reviewer1" placeholder="Reviewer1">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="Email1" placeholder="Email">
            </div>
            <div class="form-group">
              <label for="Reviewer">Reviewer2</label>
              <input type="text" class="form-control" id="Reviewer2" placeholder="Reviewer2">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="Email2" placeholder="Email">
            </div>
            <div class="form-group">
              <label for="Reviewer">Reviewer3</label>
              <input type="text" class="form-control" id="Reviewer3" placeholder="Reviewer3">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="Email3" placeholder="Email">
            </div>
            <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
          </form>
      </div>
      <div class="finalProcess" v-else>
          
      </div>
  </div>
</template>

<script>
export default {
name:'editor',
data(){
    return{
        assign : true
    }
}
}
</script>

<style>
.editor{
  margin-top: 10vh;
  text-align: left;
  background-color: white;
  padding: 3% 3%;
  border-radius: 1em;
  width: 50vw;
  margin: auto;
  margin-top: 10vh;
}
</style>