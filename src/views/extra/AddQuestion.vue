<template>
    <add-extra :path="this.path" />
</template>

<script>
    import AddExtra from '@/components/extra/AddExtra'
    export default {
        components:{
            AddExtra
        },
        data(){
            return{
                path: ''
            }
        },
        created(){
            this.path = this.$route.params.path
        }
    }
</script>

<style>

</style>