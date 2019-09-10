<template>
    <div class="wrapper width_ui">
        <h2 class="title">UI Components</h2>
        <div class="ui_content">
            <form name="ui_form">
                <ui-input-name @input="input"/>
                <ui-select @change ="select"/>
                <ui-button @click="doSome"/>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        components:{
                'ui-input-name': () => import('@/components/layouts/ui/ui-input/ui-input-name.vue'),
                'ui-select': () => import('@/components/layouts/ui/ui-input/ui-select.vue'),
                'ui-button' : () => import('@/components/layouts/ui/ui-button/ui-button.vue')
        },
        data() {
            return{
            selected: '',
            name: ''
            }
        },
        methods:{
            resetForm(){
                document.forms.ui_form.reset();
            },
            input(data){
                this.name = data.value
            },
            select(data){
                this.selected = data.value
            }
        }
    }
</script>
