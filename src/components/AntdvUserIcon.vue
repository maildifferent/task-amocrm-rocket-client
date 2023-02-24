<!-- https://www.antdv.com/components/avatar - Data Display - Avatar - Basic -->

<template>
  <a-avatar style="margin-right: 8px;">
    <template #icon><UserOutlined /></template>
  </a-avatar>
</template>

<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
});
</script>
