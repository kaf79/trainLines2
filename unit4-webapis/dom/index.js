let mainElement = document.getElementById("main");
const arr = Array.from(Array(36).keys());

for (let e of arr) {
    console.log(e)
    let div = document.createElement('div');
    div.textContent = e;
    div.className = "gridElement"
    mainElement.append(div);
}