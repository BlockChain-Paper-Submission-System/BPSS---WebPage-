<template>
  <div class="reviewer container">
      <div class="reminder" v-if="txId!==null">
      <h2>success!</h2>
      <p>Your transaction id is:{{txId}}</p>
      <button @click="hideReminder">OK!</button>
    </div>
    <form>
      <div class="form-group">
      <label for="TxId">TxId(paper)</label>
      <input type="text" class="form-control" id="TxId" placeholder="TxId(Paper)" v-model="submitContent.txId">
    </div>
    <div class="form-group">
      <label for="Reviewer">Reviewer</label>
      <input type="text" class="form-control" id="Reviewer" placeholder="Reviewer" v-model="submitContent.reviewer">
    </div>
    <div class="form-group">
      <label for="ORCID">ORCID</label>
      <input type="text" class="form-control" id="ORCID" placeholder="ORCID" v-model="submitContent.orcid">
    </div>
    <div class="form-group">
      <label for="HashCm">Hash(Comment)</label>
      <input type="text" class="form-control" id="HashCm" placeholder="Hash(Comment)" v-model="submitContent.hashCm">
    </div>
    <div class="form-group">
      <label for="Comment">Comment</label>
      <input type="text" class="form-control" id="Comment" placeholder="Comment" v-model="submitContent.comment">
    </div>
    <div class="form-group">
    <label for="statusSelect">Status select</label>
    <select class="form-control" id="statusSelect" v-model="submitContent.status">
      <option>accept</option>
      <option>reject</option>
    </select>
  </div>
    <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
</form>

  </div>
</template>
<script>
import { apiReview } from "@/api/index.js"; 
export default {
  name: 'reviewer',
  data(){
    return{
      txId: null,
      submitContent:{
        txId:null,
        reviewer:null,
        email:'do not need',
        orcid:null,
        hashCm:null,
        comment:null,
        status:null
      }
    }
  },
  methods:{
   hideReminder(){
    this.txId = null;
  },
  submit(){
      let reqTime = new Date();
      apiReview({
        txId:this.submitContent.txId,
        reviewer:this.submitContent.reviewer,
        email:this.submitContent.email,
        orcid:this.submitContent.orcid,
        hashCm:this.submitContent.hashCm,
        comment:this.submitContent.comment,
        status:this.submitContent.status,
        reqTime: reqTime
      })
      .then(response => {
          this.txId = response.data;
        })
      .catch((error) => { console.error(error) })
    }
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
