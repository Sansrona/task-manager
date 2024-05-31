<template>
  <div class="task__item">
    <div class="task__item_input">
      <input type="checkbox" v-model="isDone" @change="$emit('toggle', task)">
      <div class="task__item_description" :class="{ 'task__item--done': isDone }">
        <h3>{{ task.title }}</h3>
        <p>{{ task.dueDate }}</p>
      </div>
    </div>
    <div class="task__item_buttons">
      <button class="button" @click="$emit('delete', task)">Удалить</button>
      <button class="button" @click="showModal = true">Редактировать</button>
    </div>
    <TaskModal :visible="showModal">
      <TaskForm :task="task" @save="editTask" @close="showModal = false" />
    </TaskModal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import TaskModal from '@/components/TaskModal.vue';
import TaskForm from '@/components/TaskForm.vue';
import { TaskType } from '../types/views/task.types';
import { TaskDto } from '@/types/dto/task.dto';


const showModal = ref(false);
const props = defineProps<{
  task: TaskType;
}>();

const editTask = (task: TaskDto) => {
  console.log(task);

  emits('edit', task);
  showModal.value = false;
};
const isDone = ref(props.task.completed);
const emits = defineEmits(['edit', 'delete', 'toggle'])

</script>

<style scoped>
@import '../styles/main.scss';
</style>
