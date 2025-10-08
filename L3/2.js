
function filterUserFields(user) {
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    };
}//users

const todos = pm.response.json();
const incompleteTodos = todos.filter(todo => !todo.completed);
pm.response.json = () => incompleteTodos;
//todos
