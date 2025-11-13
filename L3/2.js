pm.sendRequest('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        const filteredUsers = res.json().map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        pm.environment.set("filteredUsers", JSON.stringify(filteredUsers));
        console.log("отфильтрованные пользователи:", filteredUsers.length);
    });
pm.sendRequest('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        const incompleteTodos = res.json().filter(todo => !todo.completed);
        pm.environment.set("incompleteTodos", JSON.stringify(incompleteTodos));
        console.log("незавершенные задачи:", incompleteTodos.length);
    });
