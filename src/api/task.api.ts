import type { AxiosInstance } from 'axios';
import { BasicRest } from './core';
import { TaskType } from '../types/views/task.types';
import { TaskDto } from '../types/dto/task.dto';

export class TaskApi extends BasicRest {
  url = 'tasks';

  constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  async deleteTask(id: number) {
    return await this.deleteRequest(`${this.url}/${id}`);
  }

  async getTasks(query?: string) {
    return await this.getRequest<TaskType[]>(`${this.url}${query}`);
  }

  async getTaskById(id: number) {
    return await this.getRequest<TaskType>(`${this.url}/${id}`);
  }

  async postTask(data: TaskDto) {
    return await this.postRequest(`${this.url}`, data);
  }

  async putTask(id: number, data: TaskDto) {
    return await this.putRequest(`${this.url}/${id}`, data);
  }
}
