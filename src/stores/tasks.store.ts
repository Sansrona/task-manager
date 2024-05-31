import { taskApi } from '@/api';
import { TaskDto } from '@/types/dto/task.dto';
import { TaskType } from '@/types/views/task.types';
import { defineStore } from 'pinia';

interface State {
  tasks: TaskType[];
}

export const useTaskStore = defineStore('task-store', {
  state: (): State => ({
    tasks: [],
  }),
  getters: {
    lastId: state => Number(state.tasks[state.tasks.length - 1]?.id) + 1,
  },
  actions: {
    async fetchTasks(text = '') {
      let query = text ? '?_title=' + text : '';
      const response = await taskApi.getTasks(query);
      this.tasks = response.data;
    },
    async addTask(task: TaskDto) {
      const response = await taskApi.postTask(task);
      this.tasks.push(response.data);
    },
    async updateTask(task: TaskType) {
      await taskApi.putTask(task.id, task);
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasks.splice(index, 1, task);
      }
    },
    async deleteTask(task: TaskType) {
      await taskApi.deleteTask(task.id);
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
    toggleTaskStatus(task: TaskType) {
      task.completed = !task.completed;
      this.updateTask(task);
    },
  },
});
