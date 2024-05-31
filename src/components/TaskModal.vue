<template>
  <div class="task__modal" v-if="visible">
    <div class="task__modal_content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  visible: boolean;
}>();
</script>

<style scoped>
@import '../styles/task-modal.scss';
</style>
