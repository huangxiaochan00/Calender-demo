

function g(selector) {
    return document.querySelector(selector)
}
function gs(selector) {
    return document.querySelectorAll(selector)
}
function render(currentTime) {
    const year = currentTime.getFullYear()
    const month = currentTime.getMonth()
    initTime()
    generatorTime()
    function initTime() {
        const header = g('#date')
        header.innerHTML = `${year}年${month + 1}月`
    }
    function generatorTime() {
        const firstOfMonth = new Date(year, month - 1 + 1, 1)
        const nextFirstOfMonth = new Date(year, month - 1 + 1 + 1, 1) - 86400 * 1000
        const lastOfMonth = new Date(nextFirstOfMonth)
        const days = g('#days')
        const time = new Date();
        let selectedLi
        days.innerHTML = ""
        for (let i = 1; i < firstOfMonth.getDay(); i++) {
            const li = document.createElement('li')
            li.innerHTML = new Date(firstOfMonth - 86400 * 1000 * i).getDate()
            days.prepend(li)

        }
        for (let i = 1; i <= lastOfMonth.getDate(); i++) {
            const li = document.createElement('li')
            if (year == time.getFullYear() && month == time.getMonth() && i === time.getDate()) {
                li.classList.add("calender-days-today")
            }
            li.innerHTML = i

            const key = `${year}-${month + 1}-${i}`
            let event = window.data[key]
            // console.log(key, event);
            if (event) {
                console.log(key, event);
                li.classList.add("calender-days-event")

            }
            li.onclick = () => {
                console.log(selectedLi);
                if (selectedLi) {
                    selectedLi.classList.remove("calender-days-selected")
                }
                li.classList.add("calender-days-selected")
                selectedLi = li
                let plan = g("#plan")
                if (!event) {
                    plan.innerHTML = '没有日程'
                }
                else {
                    plan.innerHTML = event
                }


            }
            days.append(li)

        }
        for (let i = 1; i <= 7 - lastOfMonth.getDay(); i++) {
            const li = document.createElement('li')
            li.innerHTML = i
            days.append(li)
        }
    }

}
let now = new Date()
render(now)
const preMonth = g("#preMonth")
const nextMonth = g("#nextMonth")
const today = g("#today")

preMonth.onclick = () => {
    // now = new Date(now - 86400 * 1000 * 30)
    const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    now = new Date(firstOfMonth - 86400 * 1000 * 30)
    render(now)
}
nextMonth.onclick = () => {
    const nextFirstOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    now = new Date(nextFirstOfMonth)
    render(now)
}
today.onclick = () => {
    render(new Date())
}