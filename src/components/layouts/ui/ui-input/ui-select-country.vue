<template>
    <div class="ui_input ui_select">
        <select class="inputText select_arrow" 
                name="" 
                required="" 
                :title="props.select.title" 
                v-model="props.select.value" 
                @change="country" 
                :disabled="props.select.disabled"> 
            <option value="" disabled selected></option>
            <option v-for="(item, index) in props.select.options"
                    :key="item"
            >{{props.select.options[index]}}</option>
        </select>
        <span>Country</span>
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
	                options: ['Ukraine', 'USA', 'Poland'],
	                value: ''
                }
            }
        }
    },
    methods:{
        country(){
            this.$emit('country', {
                select: this.props.select.value
            });
        }
    }
}
</script>