const populateReps = () => {
    let container = document.getElementById("reps")
    for (let i = 1; i < 101; i++) {
        let option = document.createElement('option')
        option.value = i
        option.innerHTML = i
        container.appendChild(option)
    } 
}
const randomColor = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}
const showPleas = (plea, reps) => {
    let outputContainer = document.getElementById("pleaOutput")
    while (outputContainer.firstChild) {
        outputContainer.removeChild(outputContainer.firstChild);
    }
    if (document.getElementById("useRandom").checked) {
        reps = Math.floor(Math.random() * 101)
    }
    for (let i = 0; i < reps; i++) {
        let p = document.createElement('p')
        if (Math.floor(Math.random() * 2) === 0) {
            p.innerHTML = plea.toUpperCase()
        } else {
            p.innerHTML = plea
        }
        p.style.color = randomColor()
        outputContainer.appendChild(p)
    }
}
document.getElementById("submitBtn").addEventListener('click', function(event) {
    let childPlea = document.getElementById("childPlea")
    let reps = document.getElementById("reps")
    event.preventDefault()
    if (childPlea.value == "") {
        alert("Please specify a plea and its repetition.")
    } else {
        if (reps.value == "default" && document.getElementById("useRandom").checked == false) {
            alert("Please specify a repetition.")
        } else {
            showPleas(childPlea.value, reps.value)
        }    
    }
})
document.querySelectorAll(".pleaForm, .random").forEach(function(element) {
    element.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault()
            document.getElementById("submitBtn").click()
        }
    })
})
document.querySelectorAll(".random").forEach(function(element) {
    element.addEventListener('click', function() {
        let random = document.getElementById("useRandom")
        let reps = document.getElementById("reps")
        if (element.id === "randomLbl") {
            if (random.checked) {
                random.checked = false
                reps.disabled = false
            } else {
                random.checked = true
                reps.disabled = true
            }
        } else {
            if (random.checked) {
                random.checked = true
                reps.disabled = false
            } else {
                random.checked = false
                reps.disabled = true
            }
        }
    })
})
 
populateReps()
document.getElementById("childPlea").focus()