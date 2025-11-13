const postsResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/posts');
const sortedPosts = postsResponse.json().sort((a, b) => b.title.length - a.title.length);
pm.environment.set("sortedPostsAsync", JSON.stringify(sortedPosts));
console.log("Posts отсортированы по длине заголовка:", sortedPosts[0].title);
const commentsResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/comments');
const sortedComments = commentsResponse.json().sort((a, b) => {
    const nameA = a.name?.toLowerCase() || "";
    const nameB = b.name?.toLowerCase() || "";
    return nameA.localeCompare(nameB);
});
pm.environment.set("sortedCommentsAsync", JSON.stringify(sortedComments));
console.log("Comments отсортированы по имени автора:", sortedComments[0].name);
const usersResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/users');
const filteredUsers = usersResponse.json().map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone
}));
pm.environment.set("filteredUsersAsync", JSON.stringify(filteredUsers));
console.log("Filtered users (async):", filteredUsers.length);
const todosResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/todos');
const incompleteTodos = todosResponse.json().filter(todo => !todo.completed);
pm.environment.set("incompleteTodosAsync", JSON.stringify(incompleteTodos));
console.log("незавершенные задачи:", incompleteTodos.length);
