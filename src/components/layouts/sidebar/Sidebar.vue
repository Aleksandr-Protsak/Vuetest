<template>
    <div class="appsidebar">
        <ul class="nav">
           <li
            v-for="tab in tabs"
            :key="tab.link"
            @click="currentTab = tab.link"
           ><router-link :class="{active:currentTab === tab.link}" 
                         :to="tab.link"
                         ><i :class="tab.class"></i></router-link>
           </li>
        </ul>
    </div>
</template>
<script>
    export default{
         data(){
            return{
                currentTab: "/",
                tabs:[
                    {link: "/", class:"flaticon-home"},
                    {link: "/main", class:"flaticon-list"},
                    {link: "/profile", class:"flaticon-avatar"}
                ]
            }
         
        }
    }
</script>
<style src="@/css/flaticon/flaticon.css"></style>