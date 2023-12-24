
<script setup lang="ts">
    import Series from '@/objects/series';
    import SeriesService from '@/services/seriesServise';
    import { watchEffect } from 'vue';

    const seriesService = new SeriesService();
    const uid = $route.params.uid;
    watchEffect(async () => {
    seriesService.getSeries(uid).then((response) => {
        console.log(response);
    });
})
</script>

<template>
  <div class="seriesDetails">
        These are the series details  
        {{
          $route.params
        }}
  </div>
</template>

<style scoped>

</style>
