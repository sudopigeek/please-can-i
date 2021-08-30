const populateReps = () => {
    let container = document.getElementById("reps")
    for (let i = 1; i < 101; i++) {
        let option = document.createElement('option')
        option.value = i
        option.innerHTML = i
        container.appendChild(option)
    } 
}

document.getElementById("submitBtn").addEventListener('click', function(event) {
    let childPlea = document.getElementById("childPlea")
    let reps = document.getElementById("reps")
    if (childPlea.value == "" || reps.value == "default") {
        alert("Please specify a plea and its repetition.")
    } else {
        showPleas(childPlea.value, reps.value)
    }
    event.preventDefault()
})

const showPleas = (plea, reps) => {
    let outputContainer = document.getElementById("pleaOutput")
    // Remove all child elements:
    while (outputContainer.firstChild) {
        outputContainer.removeChild(outputContainer.firstChild);
    }
    // Create pleas:
    for (let i = 0; i < reps; i++) {
        let p = document.createElement('p')
        p.innerHTML = plea
        outputContainer.appendChild(p)
    }
}

populateReps()