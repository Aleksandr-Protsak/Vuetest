<template>
    <div class="ui_input">
        <input  type="number" 
                class="inputText"  
                name="" 
                required="" 
                :title="props.input.title" 
                v-model="props.input.value" 
                @input="phone"/>
        <span>Phone number</span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                input: {
                     title: 'Phone',
                    disabled: false,
                    value: ''
                }
            }    
        }
    },
    methods:{
        phone(){
            this.$emit('phone', {
                value: this.props.input.value
            });
        }
    }
}
</script>