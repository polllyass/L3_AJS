pm.sendRequest('https://jsonplaceholder.typicode.com/posts', function (err, res) {
    if (!err) {
        const sortedPosts = res.json().sort((a, b) => b.title.length - a.title.length);
        pm.environment.set("sortedPosts", JSON.stringify(sortedPosts));
        console.log("Posts отсортированы по длине заголовка:", sortedPosts[0].title);
    }
});
pm.sendRequest('https://jsonplaceholder.typicode.com/comments', function (err, res) {
    if (!err) {
        const sortedComments = res.json().sort((a, b) => {
            const nameA = a.name?.toLowerCase() || "";
            const nameB = b.name?.toLowerCase() || "";
            return nameA.localeCompare(nameB);
        });
        pm.environment.set("sortedComments", JSON.stringify(sortedComments));
        console.log("Comments отсортированы по имени автора:", sortedComments[0].name);
    }
});
