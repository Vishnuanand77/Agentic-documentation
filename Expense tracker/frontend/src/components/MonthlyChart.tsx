'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Expense } from '@/services/api';

interface MonthlyChartProps {
  expenses: Expense[];
}

export default function MonthlyChart({ expenses }: MonthlyChartProps) {
  // Group expenses by month and calculate total amount
  const monthlyData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);
    const monthYear = `${date.toLocaleString('default', {
      month: 'short',
    })} ${date.getFullYear()}`;
    
    const existingMonth = acc.find((item) => item.month === monthYear);
    if (existingMonth) {
      existingMonth.amount += expense.amount;
    } else {
      acc.push({
        month: monthYear,
        amount: expense.amount,
      });
    }
    return acc;
  }, [] as { month: string; amount: number }[]);

  // Sort by month
  monthlyData.sort((a, b) => {
    const dateA = new Date(a.month);
    const dateB = new Date(b.month);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="w-full h-[400px]">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Monthly Expenses
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Amount']}
          />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 