<template>
    <div class="author container">
      <div class="reminder" v-if="txId!==null">
      <h2>success!</h2>
      <p>Your transaction id is:{{txId}}</p>
      <button @click="hideReminder">OK!</button>
    </div>
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="Hash">Hash</label>
      <input type="text" class="form-control" id="Hash" placeholder="Hash" v-model="submitContent.hash">
    </div>
    <div class="form-group">
      <label for="HashCT">Hash(Clear Text)</label>
      <input type="text" class="form-control" id="HashCT" placeholder="Hash(Clear Text)" v-model="submitContent.hashCT">
    </div>
    <div class="form-group">
      <label for="Author">Author-list</label>
      <input type="text" class="form-control" id="Author" placeholder="Author-list" v-model="submitContent.authorList">
    </div>
    <div class="form-group">
      <label for="CoAuthor">Corr-author</label>
      <input type="text" class="form-control" id="CoAuthor" placeholder="Corr-author" v-model="submitContent.coAuthor">
    </div>
    <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
</form>
  </div>
</template>
<script>
import { apiFind , apiAdd } from "@/api/index.js"; 
export default {
  name: 'author',
  data(){
    return{
      txId:null,
      submitContent:{
        hashCT:null,
        hash:null,
        authorList:null,
        status:'sent',
        coAuthor:null
      }
    }
  },
  methods:{
    hideReminder(){
      this.txId = null;
    },
    submit(){
      console.log(123)
      apiAdd({
        para1:this.submitContent.hashCT,
        para2:this.submitContent.hash,
        para3:this.submitContent.authorList,
        para4:this.submitContent.status,
        para5:this.submitContent.coAuthor
      })
      .then(response => {
          // console.log(response)
          this.txId = response.data;
        })
      .catch((error) => { console.error(error) })
    }
  }
}
</script>
<style>
.author{
  text-align: left;
  background-color: white;
  margin-top: 10vh;
  padding: 3% 3%;
  border-radius: 1em;
}
.reminder{
  padding: 5vh 8vw;
  box-shadow:3px 3px 3px 3px #cccccc;
  z-index: 100;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  background-color:rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
}
</style>