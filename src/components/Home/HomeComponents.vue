<script>/* eslint-disable */</script>
<template>
  <div class="HomeComponents">
    <MainSection/>
    <ClassSection/>
    <QuotesSection/>
  </div>
</template>

<script>
import MainSection from './HomeComponents/components/MainSection';
import ClassSection from './HomeComponents/components/ClassSection';
import QuotesSection from './HomeComponents/components/QuotesSection';

export default {
  name: 'HomeComponents',
  components: {
    MainSection,
    ClassSection,
    QuotesSection,
  },
};
</script>
<style lang="scss" scoped>
  .HomeComponents{
    margin-top: 80px;
  }
</style>