const populateReps = () => {
    let container = document.getElementById("reps")
    for (let i = 1; i < 101; i++) {
        let option = document.createElement('option')
        option.value = i
        option.innerHTML = i
        container.appendChild(option)
    } 
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
        outputContainer.appendChild(p)
    }
}
document.getElementById("submitBtn").addEventListener('click', function(event) {
    let childPlea = document.getElementById("childPlea")
    let reps = document.getElementById("reps")
    if (childPlea.value == "") {
        alert("Please specify a plea and its repetition.")
    } else {
        if (reps.value == "default" && document.getElementById("useRandom").checked == false) {
            alert("Please specify a repetition.")
        } else {
            showPleas(childPlea.value, reps.value)
        }    
    }
    event.preventDefault()
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