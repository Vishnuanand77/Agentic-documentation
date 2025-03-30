'use client';

import { useEffect, useState } from 'react';
import CategoryChart from '@/components/CategoryChart';
import MonthlyChart from '@/components/MonthlyChart';
import { expenseApi, Expense } from '@/services/api';

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        const data = await expenseApi.getAll();
        setExpenses(data);
        setError('');
      } catch (err) {
        console.error('Error fetching expenses:', err);
        setError('Failed to fetch expenses');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Expenses</h2>
        <div className="text-4xl font-bold text-indigo-600">
          ${totalExpenses.toFixed(2)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Expenses by Category</h2>
          <CategoryChart expenses={expenses} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
          <MonthlyChart expenses={expenses} />
        </div>
      </div>
    </div>
  );
} 