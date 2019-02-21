<template>
<div class="wrapper width_ui">
    <h2 class="title">Home</h2>
    <ul class="row">
        <li class="row_title">
            <ul class="col">
                <li class="col_img"></li>
                <li class="col_name">Name</li>
                <li class="col_price">Price</li>
                <li class="col_vol">Volume (24h)</li>
            </ul>
        </li>
        <li class="row_val" 
            v-for="item in coinlist" 
            :key="item.index">
            <ul class="col">
                <li class="col_img"><img 
                                    :alt="item.name" 
                                    :src="`https://www.barchart.com/img/crypto-icons/${item.symbol.toLowerCase()}.png`"
                                    /></li>
                <li class="col_name">{{item["name"]}}</li>
                <li class="col_price">{{item["price_usd"]}}</li>
                <li class="col_vol">{{item["24h_volume_usd"]}}</li>
            </ul>
        </li>
    </ul>
</div>
</template>
<script>
    export default {
         mounted(){
            this.$store.dispatch('getCoins');
        },
        computed: {
            coinlist(){
                return this.$store.getters.coins
            }
        }
    }
</script>