// Populate repetition dropbox:
let container = document.getElementById("reps")
for (let i = 1; i < 101; i++) {
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    container.appendChild(option)
} 

document.getElementById("submitBtn").addEventListener('click', function(event) {
    let childPlea = document.getElementById("childPlea")
    let reps = document.getElementById("reps")
    if (childPlea.value == "" || reps.value == "default") {
        alert("PLease specify a plea and its repetition.")
    } else {
        showPleas()
    }
    event.preventDefault()
})

const showPleas = () => {
    
}