<template>
  <div class="reviewer container">
    <form>
      <div class="form-group">
      <label for="TxId">TxId(paper)</label>
      <input type="text" class="form-control" id="TxId" placeholder="TxId(Paper)">
    </div>
    <div class="form-group">
      <label for="Reviewer">Reviewer</label>
      <input type="text" class="form-control" id="Reviewer" placeholder="Reviewer">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="ORCID">ORCID</label>
      <input type="text" class="form-control" id="ORCID" placeholder="ORCID">
    </div>
    <div class="form-group">
      <label for="HashCm">Hash(Comment)</label>
      <input type="text" class="form-control" id="HashCm" placeholder="Hash(Comment)">
    </div>
    <div class="form-group">
      <label for="Comment">Comment</label>
      <input type="text" class="form-control" id="Comment" placeholder="Comment">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

  </div>
</template>
<script>
import { apiFind , apiAdd } from "@/api/index.js"; 
export default {
  name: 'reviewer',
  data(){
    return{
      txId:null,
      submitContent:{
        txId:null,
        reviewer:null,
        email:null,
        orcid:null,
        hashCm:null,
        comment:null,
        status:null
      }
    }
  },
  methods:{
    
  }
}
</script>

<style>
.reviewer{
  margin-top: 10vh;
  text-align: left;
  background-color: white;
  padding: 3% 3%;
  border-radius: 1em;
}
</style>
