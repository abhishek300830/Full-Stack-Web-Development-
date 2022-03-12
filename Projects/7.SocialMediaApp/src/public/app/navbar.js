let navlinks = $('.navbar-nav .nav-link')

navlinks.click((event) => {
    /* console.log($(event.target).attr('data-component')) */
    let componenturl = `/components/${$(event.target).attr('data-component')}.html`
    $('#content').load(componenturl)
})