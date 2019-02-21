<template>
    <div class="ui_input ui_select">
        <select class="inputText" 
                name="" 
                required="" 
                :title="props.select.title" 
                v-model="props.select.value"
                 @change="city" 
                 :disabled="props.select.disabled"> 
            <option value="" disabled selected></option>
            <option v-for="(item, index) in props.select.options"
                    :key="item"
            >{{props.select.options[index]}}</option>
        </select>
        <span>City</span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            props:{
                select:{
                    title: 'Select please',
	                disabled: false,
	                options: ['Vinnitsya', 'Kyiv', 'Lviv'],
	                value: ''
                }
            }
        }
    },
    methods:{
        city(){
            this.$emit('city', {
                select: this.props.select.value
            });
        }
    }
}
</script>