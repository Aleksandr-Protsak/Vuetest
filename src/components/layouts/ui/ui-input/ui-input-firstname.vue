<template>
    <div class="ui_input">
        <input  type="text" 
                class="inputText"  
                name="" 
                required="" 
                :title="props.input.title" 
                v-model="props.input.value" 
                @input="firstName"
                />
        <span>First Name</span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                input: {
                    title: 'First Name',
                    disabled: false,
                    value: ''
                }
            }    
        }
    },
    methods:{
        firstName(){
            this.$emit('firstName', {
                value: this.props.input.value
            });
        }
    }
}
</script>