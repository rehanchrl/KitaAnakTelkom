<script>/* eslint-disable */</script>

<template>
    <div class="ContentComponents">
        <ContentList/>
    </div>
</template>

<script>
import ContentList from './ContentComponents/components/ContentList';
export default {
    name:'ContentComponents',
    components:{
        ContentList,
    }
}
</script>

<style lang="scss" scoped>
    .ContentComponents{
        margin-top: 90px;
    }
</style>
