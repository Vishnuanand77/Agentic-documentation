'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { Expense } from '@/services/api';

interface CategoryChartProps {
  expenses: Expense[];
}

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884D8',
  '#82CA9D',
  '#FFC658',
];

export default function CategoryChart({ expenses }: CategoryChartProps) {
  // Group expenses by category and calculate total amount
  const categoryData = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find((item) => item.name === expense.category);
    if (existingCategory) {
      existingCategory.value += expense.amount;
    } else {
      acc.push({
        name: expense.category,
        value: expense.amount,
      });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  // Sort by value in descending order
  categoryData.sort((a, b) => b.value - a.value);

  return (
    <div className="w-full h-[400px]">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Expenses by Category
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelFormatter={(label) => label}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
} 