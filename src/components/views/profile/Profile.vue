<template>
     <div class="wrapper width_ui">
        <h2 class="title">User Profile</h2>
        <div class="ui_content dimension">
            <div class="user_content">
                <ui-card @fotoCard="fotoCardVal"/>
                <form name="usercreate">
                    <ul class="form_row">
                        <li>
                            <ui-input-firstname @firstName="firstnameVal"/>
                            <ui-input-lastname @lastName ="lastnameVal"/>
                            <ui-input-phone @phone="phoneVal" disabled="true"/>
                        </li>
                        <li>
                            <ui-select-country @country="countryVal"/>
                            <ui-select-city @city="cityVal"/>
                            <ui-input-adress @adress="adressVal"/>
                        </li>
                        <li>
                            <ui-input-postcode @postCode="postcodeVal"/>
                            <ui-button-save @click="addUsers"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
        export default {
            components:{
                'ui-card': () => import('@/components/layouts/ui/ui-card/ui-card.vue'),
                'ui-input-firstname' : () => import('@/components/layouts/ui/ui-input/ui-input-firstname.vue'),
                'ui-input-lastname' : () => import('@/components/layouts/ui/ui-input/ui-input-lastname.vue'),
                'ui-input-phone' : () => import('@/components/layouts/ui/ui-input/ui-input-phone.vue'),
                'ui-select-country' : () => import('@/components/layouts/ui/ui-input/ui-select-country.vue'),
                'ui-select-city' : () => import('@/components/layouts/ui/ui-input/ui-select-city.vue'),
                'ui-input-adress' : () => import('@/components/layouts/ui/ui-input/ui-input-adress.vue'),
                'ui-input-postcode' : () => import('@/components/layouts/ui/ui-input/ui-input-postcode.vue'),
                'ui-button-save' : () => import('@/components/layouts/ui/ui-button/ui-button-save.vue')
            },
            data() {
                return{
                    img: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    country: '',
                    city: '',
                    adress: '',
                    postCode: ''
                }
            },
            methods:{
                fotoCardVal(data){
                    this.img = data.foto
                },
                firstnameVal(data){
                    this.firstName = data.value
                },
                lastnameVal(data){
                    this.lastName = data.value
                },
                phoneVal(data){
                    this.phone = data.value
                },
                countryVal(data){
                    this.country = data.select
                },
                cityVal(data){
                    this.city = data.select
                },
                adressVal(data){
                    this.adress = data.value
                },
                postcodeVal(data){
                    this.postCode = data.value
                },
                addUsers() {
                    if(this.firstName === '' || this.lastName === '' || this.phone === '' || this.country === ''
                    || this.city === '' || this.adress === '' || this.postCode === ''){
                         alert('Fill in all fields!!!');
                    }else{
                        const db = firebase.firestore();
                        db.collection("users").doc(this.firstName + ' ' + this.lastName).set({
                            fotoCard: this.img,
                            firstname: this.firstName,
                            lastname: this.lastName,
                            phoneNumber: this.phone,
                            country: this.country,
                            city: this.city,
                            adress: this.adress,
                            postCode: this.postCode
                        })
                        .then(function(docRef) {
                            document.forms.usercreate.reset();
                            alert("Your data has been successfully sent");
                        })
                        .catch(function(error) {
                            console.error("Error adding document: ", error);
                        });
                    }
                }
            }
        }
        
</script>
