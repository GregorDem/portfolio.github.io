var textarea = document.querySelector('textarea')
textarea.addEventListener('keyup', function(){
  if(textarea.scrollTop > 0){
    textarea.style.height = textarea.scrollHeight + "px"
  }
})

let arrayOfTasks;
if (!localStorage.arrayOfTasks) {
	arrayOfTasks = []
} else {
	arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks'))
}

let allDiv;
const btnSave = document.querySelector('.Save')
const btnDelete = document.querySelector('.Delete')
const IdTasks = document.querySelector('.Alltasks')
const IdTaskarea = document.querySelector('.taskarea')

function task(content) {
	this.content = content
	this.completed = false
}

btnSave.addEventListener('click',() => {
	if (IdTaskarea.value != '') {
		arrayOfTasks.push(new task(IdTaskarea.value))
		document.getElementById('taskArea').value = ''
		saveInLocal()
		fillNewTasks()
	} else {
		alert('Вы не вписали задачу!')
	}
});

const saveInLocal = () => {
	localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks))
}

const createHTML = (task,index) => {
	return `
		<div class="DivTasks ${task.completed ? 'checked' : ''}">
			<p class = 'newTask'>${index+1})&nbsp;${task.content}</p>
			<input onclick = "completedTask(${index})" class = "newCheckbox" type="checkbox" ${task.completed ? 'checked' : ''}>
			<button onclick = "editedTask(${index})" type = "button" id="btn" value="button" class="buttons Edit">Edit</button>
			<button onclick = "deletedTask(${index})" type = "button" id="btn" value="button" class="buttons Delete">Delete</button>
		</div>
	`
}

const fillNewTasks = () => {
	IdTasks.innerHTML = ""
	if (arrayOfTasks.length > 0) {
		arrayOfTasks.forEach((item, i) => {
		  IdTasks.innerHTML += createHTML(item, i) 
		})
		allDiv = document.querySelectorAll('.DivTasks')
	}
}

const deletedTask = (index) => {
	allDiv[index].classList.add('disappearance')
	setTimeout(() => {
	arrayOfTasks.splice(index, 1)
	saveInLocal()
	fillNewTasks()	  
	}, 700)

}

const editedTask = (index) => {
	IdTaskarea.value = document.querySelectorAll('.newTask')[index].innerHTML.slice(8)
	deletedTask(index)
}

const completedTask = (index) => {
	arrayOfTasks[index].completed = !arrayOfTasks[index].completed
	if (arrayOfTasks[index].completed === true) {
		allDiv[index].classList.add('fading')
	} else {
		allDiv[index].classList.add('clarification')
	}
	setTimeout(() => {
		if (arrayOfTasks[index].completed) {
			allDiv[index].classList.add('checked')
		} else {
			allDiv[index].classList.remove('checked')
		}
		saveInLocal()
		fillNewTasks()
	}, 500)
}

fillNewTasks()