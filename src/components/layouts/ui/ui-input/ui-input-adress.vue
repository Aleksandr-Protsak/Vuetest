<template>
    <div class="ui_input">
        <input  type="text" 
                class="inputText"  
                name="" 
                required=""
                :title="props.input.title" 
                v-model="props.input.value" 
                @input="adress"/>
        <span>Adress</span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                input: {
                    title: 'Adress',
                    disabled: false,
                    value: ''
                }
            }    
        }
    },
    methods:{
        adress(){
            this.$emit('adress', {
                value: this.props.input.value
            });
        }
    }
}
</script>