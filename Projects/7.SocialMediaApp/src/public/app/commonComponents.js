$(() => {
    $('#navbar').load('../components/navbar.html', loginIfNeeded)
    $('#footer').load('../components/footer.html')
    $('#content').load('../components/all-posts.html')
    /*  loginIfNeeded() */
})

function loginIfNeeded() {
    window.currUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if (!currUser) {
        $.post('/api/users', (user) => {
            if (user) {
                console.log("logged in as ", user.username)
                window.localStorage.user = JSON.stringify(user)
                $('#nav-username').text("USER : " + user.username)
                window.currUser = window.localStorage.user
            }
        })
    } else {
        $('#nav-username').text("USER : " + currUser.username)
        console.log('Resuming Session as ', currUser.username)
    }
}

