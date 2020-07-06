<template>
  <div class="editor">
        <div class="reminder" v-if="txId!==null">
        <h2>success!</h2>
        <p>Your transaction id is:{{txId}}</p>
        <button @click="hideReminder">OK!</button>
        </div>
      <button class="btn btn-primary" @click="assign=!assign">switch</button>
      <br>
      <br>
      <div class="assign" v-if="assign">
          <form>
              <div class="form-group">
              <label for="txId">Transaction ID (Paper)</label>
              <input type="text" class="form-control" id="txId" placeholder="Transaction ID" v-model="assignContent.txIdPaper">
            </div>
            <div class="form-group">
              <label for="Reviewer">Reviewer1</label>
              <input type="text" class="form-control" id="Reviewer1" placeholder="Reviewer1" v-model="assignContent.reviewer1">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="Email1" placeholder="Email" v-model="assignContent.r1Email">
            </div>
            <div class="form-group">
              <label for="Reviewer">Reviewer2</label>
              <input type="text" class="form-control" id="Reviewer2" placeholder="Reviewer2" v-model="assignContent.reviewer2">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="Email2" placeholder="Email" v-model="assignContent.r2Email">
            </div>
            <div class="form-group">
              <label for="Reviewer">Reviewer3</label>
              <input type="text" class="form-control" id="Reviewer3" placeholder="Reviewer3" v-model="assignContent.reviewer3"> 
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="Email3" placeholder="Email" v-model="assignContent.r3Email">
            </div>
            <button type="submit" class="btn btn-primary" @click="submitAssign">Submit</button>
          </form>
      </div>
      <div class="finalProcess" v-else>
          <form>
              <div class="form-group">
              <label for="txId">Transaction ID (Paper)</label>
              <input type="text" class="form-control" id="txId" placeholder="Transaction ID" v-model="finalProcess.txId">
              </div>
              <div class="form-group">
              <label for="author">Author</label>
              <input type="text" class="form-control" id="author" placeholder="Author Name" v-model="finalProcess.author">
              </div>
              <div class="form-group">
              <label for="authorEmail">Email address (Author)</label>
              <input type="email" class="form-control" id="authorEmail" placeholder="Email" v-model="finalProcess.authorEmail">
            </div>
            <div class="form-group">
                <label for="statusSelect">Status select</label>
                <select class="form-control" id="statusSelect" v-model="finalProcess.status">
                <option>accept</option>
                <option>reject</option>
                </select>
            </div>
            <div class="form-group">
                <label for="reviewComment">Comment by Reviewer</label>
                <textarea class="form-control" id="reviewComment" cols="30" rows="10" v-model="finalProcess.reviewComment"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click="submitFinal">Submit</button>
          </form>
      </div>
  </div>
</template>

<script>
import { editorAssign, finalProcess } from "@/api/index.js";
export default {
name:'editor',
data(){
    return{
        txId: null,
        assign : true,
        assignContent:{
            txIdPaper: null,
            reviewer1:null,
            r1Email:null,
            reviewer2:null,
            r2Email:null,
            reviewer3:null,
            r3Email:null
        },
        finalProcess:{
            txId: null,
            author: null,
            status: null,
            authorEmail: null,
            reviewComment: null
        }
    }
},
methods:{
    hideReminder(){
        this.txId = null;
    },
    submitAssign(){
    let reqTime = new Date();
    let vm = this.assignContent;
      editorAssign({
        paperTxId: vm.txIdPaper,
        reviewer1: vm.reviewer1,
        email1: vm.r1Email,
        reviewer2: vm.reviewer2,
        email2: vm.r2Email,
        reviewer3: vm.reviewer3,
        email3: vm.r3Email,
        reqTime: reqTime
      })
      .then(response => {
          this.txId = response.data;
        })
      .catch((error) => { console.error(error) })
    },
    submitFinal(){
    let reqTime = new Date();
    let vm = this.finalProcess;
      finalProcess({
        paperTxId: vm.txId,
        author: vm.author,
        status: vm.status,
        mail: vm.authorEmail,
        comment: vm.reviewComment,
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