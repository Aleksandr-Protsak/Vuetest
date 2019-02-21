<template>
    <div class="ui_input">
        <input  type="text" 
                class="inputText" 
                name="" required="" 
                :title="props.input.title" 
                v-model="props.input.value" 
                @input="lastName"
                />
        <span>Last Name</span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                input: {
                    title: 'Last Name',
                    disabled: false,
                    value: ''
                }
            }    
        }
    },
    methods:{
        lastName(){
            this.$emit('lastName', {
                value: this.props.input.value
            });
        }
    }
}
</script>