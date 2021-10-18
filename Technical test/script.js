fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let text = `userId: ${data.userId} id: ${data.id} title: ${data.title}`;
        console.log(text);
        document.getElementById('div').innerHTML = text;
    })