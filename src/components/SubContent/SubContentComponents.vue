<template>
    <div class="SubContent">
        <SubContentList/>
    </div>
</template>


<style lang="scss">
    .SubContent{
        margin-top: 80px;
        padding:20px;
    }
</style>

<script>
import SubContentList from './SubContentComponents/components/SubContentList';
export default {
    name:'SubContentComponents',
    components:{
        SubContentList,
    }
}
</script>

