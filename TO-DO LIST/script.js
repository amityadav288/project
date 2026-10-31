function getTxt() {
    let lst = document.createElement("li")
    lst.className = "rr"

    let txt = document.getElementById("txt")
    let taskList = document.getElementById("taskList")

    if (txt.value != "") {
        taskList.appendChild(lst)
        lst.textContent = txt.value
        txt.value = ""
        deleteTask(lst)
    } else {
        console.log("empty textarea")
    }

}

function deleteTask(lst) {
    const delBtn = document.createElement("button")
    delBtn.textContent = `Delete`
    lst.appendChild(delBtn)

    delBtn.onclick = function () {
        lst.remove()
    }
}

function clearAll() {
    document.querySelector("#taskList").remove()

    addList()

}

function addList() {
    let ull = document.createElement("ul")
    ull.id = "taskList"
    document.getElementById("item").append(ull)
}

