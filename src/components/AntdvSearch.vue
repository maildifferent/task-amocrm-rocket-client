<!-- https://www.antdv.com/components/input - Data Entry - Input - Search box -->

<template>
  <a-space direction="vertical">
    <a-input-search v-model:value="value" placeholder="Поиск сделок" style="width: 200px" @search="onSearch" />
  </a-space>
</template>
<script lang="ts">
import { apiRequestUtil } from '../api_request_util'
import { defineComponent, ref } from 'vue'
import { data, filteredData } from './AntdvTable.vue'

export default defineComponent({
  setup() {
    const value = ref<string>('')
    const onSearch = async (searchValue: string) => {
      // console.log('use value', searchValue)
      // console.log('or use this.value', value.value)

      if (searchValue.length < 3) {
        filteredData.value = data
        return
      }

      const leadIds = await apiRequestUtil.getLeadFilter(searchValue)
      if (leadIds.length < 1) {
        filteredData.value = []
      } else {
        filteredData.value = data.filter((item) => leadIds.includes(item.id))
      }
    }

    return {
      value,
      onSearch,
    }
  },
})
</script>

