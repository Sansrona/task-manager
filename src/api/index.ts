import axios from 'axios';
import { TaskApi } from './task.api';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const taskApi = new TaskApi(axiosInstance);
