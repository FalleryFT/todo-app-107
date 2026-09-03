import React from 'react';
import ApiTodoList from '@/app/api-todos/components/ApiTodoList';
import { getTasks } from '@/lib/task';

export default async function ApiTodosPage() {
  const { tasks: initialTasks } = await getTasks({ limit: 15, skip: 0 });

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
          <header className="mb-6 border-b border-gray-100 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center">
              Daftar Tugas dari API (DummyJSON)
            </h1>
          </header>

          {/* Data diambil dari Route Handler internal / lib/tasks.ts */}
          <ApiTodoList initialTasks={initialTasks} />
        </div>
      </div>
    </main>
  );
}