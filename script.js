const endDate = "05 OCTOBER 2023 08:59 PM"
document.getElementById("end-date").innerText = endDate // date dynamically refect on page
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000
    if (diff < 0) {
        document.getElementById("endtimer").innerText = "Event is live!!!"
        return
    }
    // Calculate days
    inputs[0].value = Math.floor((diff / 3600 / 24))
    // Calculate hours
    inputs[1].value = Math.floor((diff / 3600) % 24)
    // Calculate minuts
    inputs[2].value = Math.floor((diff / 60) % 60)
    // Calculate seconds
    inputs[3].value = Math.floor((diff) % 60)
}

clock()

setInterval(
    () => {
        clock()
    }, 1000
)