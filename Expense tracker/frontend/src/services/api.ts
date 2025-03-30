'use client';

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateExpenseData {
  title: string;
  amount: number;
  category: string;
  date: string;
}

export interface UpdateExpenseData extends CreateExpenseData {
  id: string;
}

export const expenseApi = {
  // Get all expenses
  getAll: async (): Promise<Expense[]> => {
    const response = await api.get('/expenses');
    return response.data;
  },

  // Create new expense
  create: async (data: CreateExpenseData): Promise<Expense> => {
    const response = await api.post('/expenses', data);
    return response.data;
  },

  // Update expense
  update: async ({ id, ...data }: UpdateExpenseData): Promise<Expense> => {
    const response = await api.put(`/expenses/${id}`, data);
    return response.data;
  },

  // Delete expense
  delete: async (id: string): Promise<void> => {
    await api.delete(`/expenses/${id}`);
  },
}; 