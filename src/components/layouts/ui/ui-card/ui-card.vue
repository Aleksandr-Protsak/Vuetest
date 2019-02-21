<template>
    <div class="foto_download">
        <div class="user_foto ui_input">
            <div class="foto"><img :class="{none:imgActive}" 
                                    src="@/assets/avatar_user.png"
                                    /><img :class="{none:imgNone}" 
                                           :src="imgUrl" 
                                           alt="foto"/></div>
            <input type="file" 
                   name="file" 
                   id="file" 
                   class="inputfile" 
                   @change="onFileSelected" 
                    />
            <label for="file">Select foto</label>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                selectedFiles: null,
                imgUrl: null,
                imgActive: false,
                imgNone: true
            }
        },
        methods:{
            onFileSelected(e){
                let target = e.target.files;
                this.selectedFiles = target[0];
                if(target.length>0){
                    if(!this.selectedFiles.type.match('image.*')){
                         alert("It's not image");
                         return false
                    }else{
                        this.imgActive = true;
                        this.imgNone = false;
                         this.imgUrl = URL.createObjectURL(this.selectedFiles);
                         this.$emit('fotoCard', {
                            foto: this.imgUrl
                        });
                   }
                }
            }
        }
    }
 </script>