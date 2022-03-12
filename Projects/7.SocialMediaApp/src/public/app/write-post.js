$(
    $('#btnSubmit').click(() => {
        console.log(window.currUser.id)
        console.log($('#exampleFormControlInput1').val())
        console.log($('#exampleFormControlTextarea1').val())
        $.post('/api/posts', {
            userId: window.currUser.id,
            title: $('#exampleFormControlInput1').val(),
            body: $('#exampleFormControlTextarea1').val()
        }, function (data) {
            if (data) {
                window.alert('Post Submitted Successfully')
                window.location.reload();
            }
        })

    })
)