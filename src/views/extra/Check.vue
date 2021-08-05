<template>
    <div>
        <check :id="this.id"/>
    </div>
</template>

<script>
    import Check from '../../components/extra/Check'
    export default {
        components:{
            Check
        },
        data(){
            return{
                id:''
            }
        },
        created(){
            this.id = this.$route.params.id
        }
    }
</script>

<style>

</style>