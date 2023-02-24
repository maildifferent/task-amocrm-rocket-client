<!-- https://www.antdv.com/components/card - Data Display - Card - Basic card -->

<template>
  <div style="background: #ececec; padding: 30px">
    <a-card title="Пример тестового задания" :bordered="true">
      <template #extra><AntdvSearch></AntdvSearch></template>
      <AntdvTable></AntdvTable>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import AntdvTable from './AntdvTable.vue'
import AntdvSearch from './AntdvSearch.vue'
</script>
