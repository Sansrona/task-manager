<template>
  <form @submit.prevent="submitForm" class="task__form">
    <div class="task__form_close">
      <button @click="closeForm" class="button">x</button>
    </div>
    <div class="task__form_body">
      <div class="task__form_field">
        <label class="task__form_label">
          Название:
        </label>
        <input class="task__form_input" type="text" v-model="task.title" required />
      </div>
      <div class="task__form_field">
        <label class="task__form_label">
          Описание:
        </label>
        <input type="text" class="task__form_textarea" v-model="task.description" required />
      </div>
      <div class="task__form_field">
        <label class="task__form_label">
          Срок выполнения:
        </label>
        <input type="date" class="task__form_input" v-model="task.dueDate" required />
      </div>
      <button class="button task__form_button" type="submit">Сохранить</button>

    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TaskType } from '../types/views/task.types';

const props = defineProps<{
  task: TaskType;
}>();
const task = ref(props.task);

const submitForm = () => {
  emit('save', task.value);
};

const closeForm = () => {
  emit('close');
};

const emit = defineEmits(['save', 'close']);
</script>

<style scoped>
@import '../styles/main.scss';

/* Add styles here */
</style>
