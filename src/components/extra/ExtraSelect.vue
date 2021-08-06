<template>
    <div>
        <h1>EXTRA PLANET</h1>
        <div class="mode">
            <div>
                <button @click="add">Add Exercise</button>
            </div>
            <div>
                <button @click="doEx">Do Exercise</button>
            </div>
        </div>
        <h2>Please select your action</h2>
    </div>
    
</template>

<script>
export default {
    methods:{
        add(){
            return this.$router.push({name: 'AddExtra', params: {path: this.path}})
        },
        doEx(){
            return this.$router.push({name: 'XQuestionTable', params: {path: this.path, type:'1'}})
        }
    },
    props:{
        path: ''
    }
}
</script>

<style lang="scss" scoped>
    .mode{
        display: grid;
        grid-template-columns: 50% 50%;
    }
</style>