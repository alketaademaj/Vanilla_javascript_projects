//select the elements we need
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

//event listeners
draggables.forEach(draggables => {
    draggables.addEventListener('dragstart', () => {
        draggables.classList.add('dragging') //adding a class called dragging
    })

    draggables.addEventListener('dragend', () => {
        draggables.classList.remove('dragging')
    })
})

//actually moving the element 
containers.forEach(containers => {
    containers.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggables = document.querySelector('.dragging')
        if(afterElement == null) {
            containers.appendChild(draggables)
        } else {
            containers.insertBefore(draggables, afterElement)
        }
    })
})

function getDragAfterElement(containers, y) {
    const draggableElements = [...containers.querySelectorAll('.draggable:not(.dragging)')]
    draggableElements.reduce((closest, child) => {
        const box = child.getBoudingClientRect()
        const offset = y - box.top . box.height /2
        if(offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child}
      }  else {
            return closest
            } 
    }, {offset: Number.NEGATIVE_INFINITY}).element
}