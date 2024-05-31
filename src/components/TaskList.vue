<template>
  <div class="task-list">
    <div v-for="task in taskStore.tasks" :key="task.id" class="task-item">
      <TaskItem :task="task" @edit="editTask" @delete="deleteTask" @toggle="toggleTaskStatus" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTaskStore } from '@/stores/tasks.store';
import TaskItem from './TaskItem.vue';
import { TaskType } from '@/types/views/task.types';

const taskStore = useTaskStore();

const editTask = (task: TaskType) => { taskStore.updateTask(task) }
const deleteTask = (task: TaskType) => { taskStore.deleteTask(task) };
const toggleTaskStatus = (task: TaskType) => { taskStore.toggleTaskStatus(task) };
</script>

<style scoped>
@import '../styles/task-list.scss';
</style>
