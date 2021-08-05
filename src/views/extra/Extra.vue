<template>
    <div>
        <extra-select :path="this.path"/>
    </div>
</template>

<script>
import ExtraSelect from '@/components/extra/ExtraSelect'
export default {
    components:{
        ExtraSelect
    },
    data(){
        return{
            path:''
        }
    },
    created(){
        this.path = this.$route.params.path
    }
}
</script>

<style>

</style>