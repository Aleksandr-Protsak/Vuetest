<template>
    <div class="ui_input">
        <input  type="number" 
                class="inputText"  
                name="" 
                required="" 
                :title="props.input.title" 
                v-model="props.input.value"
                 @input="postCode"
                 />
        <span>Post code</span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                input: {
                    title: 'Post Code',
                    disabled: false,
                    value: ''
                }
            }        
        }
    },
    methods:{
        postCode(){
            this.$emit('postCode', {
                value: this.props.input.value
            });
        }
    }
}
</script>