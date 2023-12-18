
<script setup lang="ts">
    import Series from '@/objects/series';
    const props = defineProps({ series: Series });
    const currentSeries = props.series;
</script>

<template>
  <div class="seriesItem">
        {{
            currentSeries.title
        }}
        {{
            currentSeries.uid
        }}
  </div>
</template>

<style scoped>

</style>
