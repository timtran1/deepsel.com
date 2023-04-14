export default function (event, id) {
    if (event) event.preventDefault()
    const el = document.getElementById(id)
    el.scrollIntoView({behavior: 'smooth'})
}
