<template>
    <div class="ui_input ui_select">
        <select class="inputText select_arrow" 
                name="" 
                required="" 
                :title="props.select.title"
                 v-model="props.select.value" 
                 @change="select" 
                 :disabled="props.select.disabled"> 
            <option value="" disabled selected></option>
            <option v-for="(item, index) in props.select.options"
                    :key="item"
            >{{props.select.options[index]}}</option>
        </select>
        <span>Name</span>
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
	                options: ['Item1', 'Item2', 'Item3'],
	                value: ''
                }
            }
        }
    },
    methods:{
        select(){
            this.$emit('select', {
                select: this.props.select.value
            });
        }
    }
}
</script>
