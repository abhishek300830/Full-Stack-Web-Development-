$(function () {
    let inp_name = $('#name')
    let inp_age = $('#number')
    let inp_city = $('#city')
    let btn_submit = $('#submit')
    let tbl_person = $('#persons')

    function refreshPersonTable(personDetails) {
        tbl_person.empty()
        console.log('table is empty Now')
        tbl_person.append(`
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
        `)
        for (person of personDetails) {
            tbl_person.append(`
            <tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
            </tr>
            `)
        }
    }
    $.get('/api/persons', (data) => {
        refreshPersonTable(data)
    })

    btn_submit.click(function () {
        console.log('button clicked')
        $.post('/api/persons', {
            name: inp_name.val(),
            age: inp_age.val(),
            city: inp_city.val()

        }, function (data) {
            refreshPersonTable(data)
        }
        )
    })
})