$(
    function () {
        let newtodobox = $('#inpBox')
        let addtodobtn = $('#btnAdd')
        let todoList = $('#todoList')

        addtodobtn.click(function () {
            let newTodo = newtodobox.val()
            console.log(newtodobox.val())
            $.post('/router/',
                { task: newTodo },
                function (data) {
                    console.log(data)
                    todoList.empty()
                    for (const todo of data) {
                        todoList.append('<li>' + todo.task + '</li>')
                    }
                })

        })
    }
)