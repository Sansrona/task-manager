<template>
  <div class="home">
    <div class="home__header">
      <input class="input-text home__header_search" type="text" v-model="searchQuery" @input="searchTasks"
        placeholder="Поиск" />
      <button class="button" @click="showModal = true">Добавить задачу</button>
    </div>
    <TaskList />
    <TaskModal :visible="showModal">
      <TaskForm :task="newTask" @save="addTask" @close="showModal = false" />
    </TaskModal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TaskList from '@/components/TaskList.vue';
import TaskModal from '@/components/TaskModal.vue';
import TaskForm from '@/components/TaskForm.vue';
import { useTaskStore } from '@/stores/tasks.store';
import { TaskType } from '@/types/views/task.types';
import { TaskDto } from '@/types/dto/task.dto';

const taskStore = useTaskStore();
const showModal = ref(false);
const searchQuery = ref('');

const newTask = ref<TaskType>({
  id: '',
  title: '',
  description: '',
  dueDate: new Date(),
  completed: false,
});

const addTask = (task: TaskDto) => {
  taskStore.addTask({
    completed: false,
    dueDate: task.dueDate,
    id: String(taskStore.lastId),
    description: task.description,
    title: task.title
  });
  showModal.value = false;
};

const searchTasks = () => {
  taskStore.fetchTasks(searchQuery.value);
};

taskStore.fetchTasks();
</script>

<style scoped>
@import '../styles/main.scss';
</style>
