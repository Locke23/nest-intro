import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
	task: Task[] = [
		{id: 1, description: 'Tarefa 1', completed: false},
		{id: 2, description: 'Tarefa 2', completed: false},
		{id: 3, description: 'Tarefa 3', completed: false},
		{id: 4, description: 'Tarefa 4', completed: false},
		{id: 5, description: 'Tarefa 5', completed: false},
		{id: 6, description: 'Tarefa 6', completed: false},
		{id: 7, description: 'Tarefa 7', completed: false},
		{id: 8, description: 'Tarefa 8', completed: false},
		{id: 9, description: 'Tarefa 9', completed: false},
		{id: 10, description: 'Tarefa 10', completed: false},
	];

	getAll() {
		return this.task;
	}

	getById(id: number) {
		const task = this.task.find((value) => value.id == id);
		return task;
	}

	create(task: Task) {
		let lastId = 0;
		if(this.task.length > 0) {
			lastId = this.task[this.task.length - 1].id
		}
		task.id = lastId + 1;
		this.task.push(task)
		return task;
	}

	update(task: Task) {
		const updatedTask = this.getById(task.id);
		if(updatedTask) {
			updatedTask.description = task.description;
			updatedTask.completed = task.completed;
		}
		return updatedTask;
	}

	delete(id: number) {
		const index = this.task.findIndex(item => item.id == id);
		this.task.splice(index, 1);
	}
}
