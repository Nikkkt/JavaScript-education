document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let todos = [];

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(function (todo) {
            const status = todo.complete ? 'Completed' : 'Not Complete';
            const statusClass = todo.complete ? 'badge bg-success' : 'badge bg-secondary';

            const todoElement = `
                <div class="todo-item card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${todo.title}</h5>
                        <p class="card-text">Status: <span class="${statusClass}">${status}</span></p>
                        <button class="btn btn-info update-btn" data-id="${todo.id}">Update</button>
                        <button class="btn btn-danger delete-btn" data-id="${todo.id}">Delete</button>
                    </div>
                </div>
            `;
            todoList.innerHTML += todoElement;
        });

        document.querySelectorAll('.update-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const todoId = parseInt(btn.getAttribute('data-id'));
                update(todoId);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const todoId = parseInt(btn.getAttribute('data-id'));
                remove(todoId);
            });
        });
    }

    function updateLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const storedTodos = localStorage.getItem('todos');
        todos = storedTodos ? JSON.parse(storedTodos) : [];
        renderTodos();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = input.value.trim();
        if (title === '') return;

        const newTodo = {
            id: todos.length + 1,
            title: title,
            complete: false
        };

        todos.push(newTodo);
        updateLocalStorage();
        renderTodos();
        input.value = '';
    });

    function update(id) {
        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            todo.complete = !todo.complete;
            updateLocalStorage();
            renderTodos();
        }
    }

    function remove(id) {
        todos = todos.filter(todo => todo.id !== id);
        updateLocalStorage();
        renderTodos();
    }

    loadTodos();
});
