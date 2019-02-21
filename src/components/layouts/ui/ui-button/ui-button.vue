<template>
    <div class="ui_input ui_button">
        <button :title="props.button.title" 
                :disabled="props.button.disabled"
                @click="click"
                >{{props.button.title}}</button>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                button: {
                    title: 'Button',
                    disabled: false
                }
            }
        }
    },
    methods:{
        click(){
            this.$emit('click')
        }
    }
}
</script>