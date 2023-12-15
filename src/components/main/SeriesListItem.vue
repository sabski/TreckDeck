
<script setup lang="ts">
    import Series from '@/objects/series';
    const props = defineProps({ series: Series });
    const currentSeries = props.series;
</script>

<template>
  <div class="seriesItem">
        Hello
        {{
            currentSeries?.title
        }}
  </div>
</template>

<style scoped>

</style>
