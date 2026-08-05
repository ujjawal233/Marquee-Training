const lines = document.querySelectorAll(".line");

let delay = 0;

lines.forEach(line => {

    const text = line.textContent;

    line.innerHTML = "";

    text.split("").forEach(letter => {

        const span = document.createElement("span");

        if (letter === " ") {
        span.innerHTML = " ";
        } else {
            span.innerHTML = letter;
        }

        line.appendChild(span);

        setTimeout(() => {

            span.classList.add("show");

        }, delay);

        delay += 70; 

    });

    delay += 300;

});

/* ---------------- Cursor ---------------- */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});