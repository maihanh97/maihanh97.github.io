<template>
  <div id="app">
    <ul class="tabbar">
      <li @click="addcomment"><i class="fas fa-comment-dots"></i> {{totalComment}}</li>
      <li><i class="fas fa-thumbs-up"></i> {{totalLike}}</li>
    </ul>

    <div class="commentData" >
      <div class="list__comment" v-for="comment in listcomment" :key="comment.idComment">
        <a :href="comment.inforUser"><img :src="comment.avaUser" class="imgUser"/></a>
        
        <div class="user__comment">
          <div class="infor__user">
            <span class="name">{{comment.usercomment}}</span>
            <span class="body">{{comment.body}}</span>
          </div>
          <ul class="action">
            <li><a href="" class="like"><i class="fas fa-thumbs-up"></i></a></li> - 
            <li><a href="" class="reply" @click.prevent="addcomment">Reply</a></li>
            <li class="dateabout"> about {{comment.dateCreated}}</li>
          </ul>

          <div class="list__comment" v-for="reply in comment.replyComment" :key="reply.id">
            <a :href="reply.inforUser"><img :src="reply.avaUser" class="imgUser"/></a>
            
            <div class="user__comment">
              <div class="infor__user">
                <span class="name">{{reply.usercomment}}</span>
                <span class="body">{{reply.body}}</span>
              </div>
              <ul class="action">
                <li><a href="" class="like"><i class="fas fa-thumbs-up"></i></a></li> - 
                <li><a href="" class="reply" @click.prevent="addcomment" :key="comment.idComment">Reply</a></li>
                <li class="dateabout"> about {{reply.dateCreated}}</li>
              </ul>
            </div>
            <span class="option__delete"><i class="fas fa-ellipsis-v"></i></span>  
          </div>
          <div class="add" v-if="add">
            <img :src="ava" :alt="userCurrent"/>
            <div class="add__comment" >
              <vue-editor id="editor2" v-model="dataComment"></vue-editor>
              <button v-if="dataComment.length > 0" class="comment">Comment</button>
              <button v-else class="uncomment" disabled="true">Comment</button>
            </div>  
          </div>
        </div>

        <span class="option__delete"><i class="fas fa-ellipsis-v"></i></span>  
      </div>

      <div class="add" v-if="add">
        <img :src="ava" :alt="userCurrent"/>
        <div class="add__comment" >
          <vue-editor id="editor2" v-model="dataComment"></vue-editor>
          <button v-if="dataComment.length > 0" class="comment">Comment</button>
          <button v-else class="uncomment" disabled="true">Comment</button>
        </div>  
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>
<style scoped src="./App.css"></style>
