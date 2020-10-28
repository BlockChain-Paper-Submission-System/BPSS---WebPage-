<template>
    <div class="author container">
      <div class="reminder" v-if="txId!==null">
      <h2>success!</h2>
      <p>Your transaction id is:{{txId}}</p>
      <p>Your submission signature is:{{ss}}</p>
      <button @click="hideReminder">OK!</button>
    </div>
    <form>
    <div class="form-group">
    <label for="statusSelect">Conference or Journal?</label>
    <select class="form-control" id="statusSelect" v-model="submitContent.conf">
      <option>Conference</option>
      <option>Journal</option>
    </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlFile1">Upload your paper!</label>
    <input type="file" class="form-control-file" id="filePaper" @change="selectedFile()">
    </div>
    <button class="btn btn-primary" @click="uploadFile()">send!</button>
    <br>
    <br>
    <div class="form-group">
      <label for="SS">Submission signature</label>
      <input type="text" class="form-control" id="SS" placeholder="Submission signature" v-model="submitContent.ss">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="submitContent.mail">
    </div>
    <div class="form-group">
      <label for="ORCID">ORCID</label>
      <input type="text" class="form-control" id="ORCID" placeholder="ORCID" v-model="submitContent.orcid">
    </div>
    <div class="form-group">
      <label for="Hash">ciphertext</label>
      <input type="text" class="form-control" id="Hash" placeholder="ciphertext" v-model="submitContent.hash">
    </div>
    <div class="form-group">
      <label for="HashCT">Hash (Clear Text)</label>
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
import { apiFind , apiAdd , apiUpload} from "@/api/index.js"; 
export default {
  name: 'author',
  data(){
    return{
      paperTitle:null,
      filePaper:null,
      txId:null,
      submitContent:{
        ss:null, //submission signature
        conf:null,
        hashCT:null,
        hash:null,
        authorList:null,
        status:null,
        coAuthor:null,
        mail:null,
        orcid:null
      }
    }
  },
  methods:{
    async selectedFile(){
      let file = document.querySelector('#filePaper');
      let pdf = file.files[0]
      var reader = new FileReader();
      await reader.readAsBinaryString(pdf);
      new Promise((res, rej)=>{
        reader.onload = function(){
        let file =  reader.result;
        res(btoa(`${file}`));
      }
      })
      .then(
        res =>{
          this.filePaper = res;
        }
      )
     },
    uploadFile(){
    let file = document.querySelector('#filePaper');
        apiUpload({
        title: file.files[0].name,
        content: this.filePaper
      })
      .then(res =>{
        this.submitContent.status = res.data;
        alert(res.data)
      })
      .catch(
        err =>{
          console.log(`err_code:`,err)
        }
      )
    },
    hideReminder(){
      this.txId = null;
    },
    submit(){
      if(this.submitContent.status==null){
        alert("請先上傳檔案！")
      }
      else{
      let reqTime = new Date();
      let reqTimeForTest = new Date().getTime();
      let status = this.submitContent.status;
      this.submitContent.status = null;
      apiAdd({
        conf:this.submitContent.conf,
        fileHash:this.submitContent.hashCT,
        hash:this.submitContent.hash,
        authorList:this.submitContent.authorList,
        status:status,
        coAuthor:this.submitContent.coAuthor,
        orcid:this.submitContent.orcid,
        mail:this.submitContent.mail,
        ss:this.submitContent.ss,
        reqTime: reqTime,
        reqTimeForTest: reqTimeForTest
      })
      .then(response => {
          this.txId = response.data.txId;
        })
      .catch((error) => { console.error(error) })
    }
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