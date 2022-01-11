

function g(selector) {
    return document.querySelector(selector)
}
function gs(selector) {
    return document.querySelectorAll(selector)
}

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const firstOfMonth = new Date(year, month - 1 + 1, 1)
const nextFirstOfMonth = new Date(year, month - 1 + 1 + 1, 1) - 86400 * 1000
const lastOfMonth = new Date(new Date(year, month - 1 + 1 + 1, 1) - 86400 * 1000)
const header = g('#date')
console.log(firstOfMonth.getDay());
header.innerHTML = `${year}年${month + 1}月`
const days = g('#days')
for (let i = 1; i < firstOfMonth.getDay(); i++) {
    const li = document.createElement('li')
    li.innerHTML = new Date(firstOfMonth - 86400 * 1000 * i).getDate()
    days.prepend(li)

}
for (let i = 1; i <= lastOfMonth.getDate(); i++) {
    const li = document.createElement('li')
    li.innerHTML = i
    days.append(li)

}
for (let i = 1; i <= 7 - lastOfMonth.getDay(); i++) {
    const li = document.createElement('li')
    li.innerHTML = i
    days.append(li)
}