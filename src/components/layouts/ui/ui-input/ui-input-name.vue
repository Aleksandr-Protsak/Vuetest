<template>
    <div class="ui_input">
        <input  type="text" 
                class="inputText"  
                name="" 
                required="" 
                :title="props.input.title"
                v-model="props.input.value" 
                @input="input"
                />
        <span>Name</span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                input: {
                    title: 'Name',
                    disabled: false,
                    value: ''
                }
            }    
        }
    },
    methods:{
        input(){
            this.$emit('input', {
                value: this.props.input.value
            });
        }
    }
}
</script>