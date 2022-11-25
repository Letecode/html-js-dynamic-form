let formSection = document.getElementById('form-section')
let skillForm = document.getElementById('skillform')

let skills = [

]

function showForm(e) {
    formSection.classList.remove('d-none')
    e.classList.add('disabled')
}

function hideForm() {
    formSection.classList.add('d-none')
    document.getElementById('addButton').classList.remove('disabled')
    skillForm.reset()
}

skillForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const data = new FormData(skillForm,)
    addSkill(data)
    hideForm()
})

function addSkill(formData) {
    const skill = {
        'progress' : formData.get('progress'),
        'title' : formData.get('title'),
        'description' : formData.get('description')
    }

    skills.push(skill)
    loadSkills()
}


function loadSkills() {
    let listView = document.getElementById('skills-list')
    listView.innerHTML = ""

    for (const skill of skills) {
        let template = `
            <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
            <div class="skill-item d-flex align-items-center border border-secondary rounded p-2">
                <span class="skill-progress fs-1">${skill.progress}%</span>
                <div class="skill-details ms-3">
                    <h3>${skill.title}</h3>
                    <p>${skill.description}</p>
                </div>
            </div>
        </div>
        `

        listView.innerHTML += template
    }
}



