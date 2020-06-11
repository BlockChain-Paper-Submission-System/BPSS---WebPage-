<template>
    <div class="author container">
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="Hash">Hash</label>
      <input type="text" class="form-control" id="Hash" placeholder="Hash">
    </div>
    <div class="form-group">
      <label for="HashCT">Hash(Clear Text)</label>
      <input type="text" class="form-control" id="HashCT" placeholder="Hash(Clear Text)">
    </div>
    <div class="form-group">
      <label for="Author">Author-list</label>
      <input type="text" class="form-control" id="Author" placeholder="Author-list">
    </div>
    <div class="form-group">
      <label for="CoAuthor">Corr-author</label>
      <input type="text" class="form-control" id="CoAuthor" placeholder="Corr-author">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>
<script>
import { apiFind , apiAdd } from "@/api/index.js"; 
export default {
  name: 'author',
  data(){
    return{
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
    submit(){
      apiAdd({
        para1:this.submitContent.hashCT,
        para2:this.submitContent.hash,
        para3:this.submitContent.authorList,
        para4:this.submitContent.status,
        para5:this.submitContent.coAuthor
      })
      .then(response => {
          this.listData = response.data;
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
  padding: 3% 3%;
  border-radius: 1em;
}
</style>