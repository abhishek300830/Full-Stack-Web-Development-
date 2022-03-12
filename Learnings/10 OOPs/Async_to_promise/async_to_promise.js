function someAsyncTask(callback) {
    console.log("Task Starts")
    setTimeout(() => {
        console.log("End of Task")
        callback();
    }, 3000);
}

let somePromiseTask = function () {
    return new Promise(function (resolve, reject) {
        someAsyncTask(resolve)
    })

}
somePromiseTask()
    .then(function () {
        console.log("After task")
    })