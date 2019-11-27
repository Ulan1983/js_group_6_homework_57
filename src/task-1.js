const tasks = [
	{id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
	{id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
	{id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
	{id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
	{id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
	{id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
	{id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const frontEndTime = tasks.reduce((total, task) => {
	if (task.category === 'Frontend') {
		total += task.timeSpent
	}
	return total
}, 0);

console.log(`Общее количество времени, затраченное на работу над задачами из категории 'Frontend': ${frontEndTime} часов.`);


const bugTime = tasks.reduce((total, task) => {
	if (task.type === 'bug') {
		total += task.timeSpent
	}
	return total
}, 0);

console.log(`Общее количество времени, затраченное на работу над задачами типа 'bug': ${bugTime} часов.`);


const uiTask = tasks.filter(task => task.title.includes('UI')).length;

console.log(`Количество задач, имеющих в названии слово "UI": ${uiTask}.`);


const categoryTasks = tasks.reduce((total, task) => {
	if (task.category === 'Frontend') {
		total.Frontend++;
	}
	if (task.category === 'Backend') {
		total.Backend++;
	}
	return total
}, {Frontend: 0, Backend: 0});

console.log(categoryTasks);


const newTasks = tasks
	.filter(task => task.timeSpent > 4)
	.map(task => {
	return {
		title: task.title,
		category: task.category
	}
});


console.log(`Задачи, с затраченным временем больше 4 часов: ${newTasks}.`);


