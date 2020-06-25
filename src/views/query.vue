<template>
<div class="query">
    <div class="result" v-if="result!==null">
    <p @click="close"  class="close">x</p>
      <p v-for="(item,index) in result">
          {{index}}: {{item}}
      </p>
    </div>
    <form>
    <div class="form-group">
      <label for="txId">txId</label>
      <input type="text" class="form-control" id="txId" placeholder="txId" v-model="txId">
    </div>
    <button type="submit" class="btn btn-primary" @click="query">Submit</button>
</form>
</div>
</template>

<script>
import { apiFind } from "@/api/index.js"; 
export default {
    name: 'query',
    data(){
        return{
            txId: null,
            result: null
            // result: {"authorList":"o","coAuthor":"p","execTime":"2020-06-25T09:35:19.897Z","fileHash":"o","hash":"i","mail":"liaojack8@yahoo.com.tw","orcid":"i","reqTime":"2020-06-25T09:35:19.765Z","status":"This paper has been submitted before."}
        }
    },
    methods:{
        query(){
            apiFind({
                name: this.txId
            })
            .then(res =>{
                this.result = res.data;
                // console.log(res.data)
            })
            .catch(
                err =>{
                console.log(`err_code:`,err)
                }
            )
            .finally(
                ()=>{
                    this.txId = null;
                }
            )
                },
            close(){
                this.result = null;
            }
    }
}
</script>

<style lang="scss">
.query{
  text-align: left;
  background-color: white;
  margin: auto;
  margin-top: 10vh;
  padding: 3% 3%;
  border-radius: 1em;
  width: 50vw;
  min-height: 60vh;
  form{
      height: 100%;
  }
}
.result{
  padding: 5vh 8vw;
  box-shadow:3px 3px 3px 3px #cccccc;
  z-index: 100;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: left;
  background-color:rgba(255, 255, 255, 1.0);
  border-radius: 1rem;
  .close{
      float: right;
  }
}
</style>