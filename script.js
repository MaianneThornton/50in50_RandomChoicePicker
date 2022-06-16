const tagsElem = document.getElementById('tags')
const textarea = document.getElementById('textarea')
// Starts with the cursor in the textarea when the page loads
textarea.focus()

// keyup (when user presses down and then lets up)
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input) {
    // creates arrays (separated by the commas)
    const tags = input.split(',').filter
    // .trim (trims white space) not equal to and empty string then return a new trimmed array
    (tag => tag.trim() !== '').map(tag => tag.trim())
    // clears the tags element
    tagsElem.innerHTML = ''

    // looping through each tag added and creating the spans that will display
    tags.forEach(tag => {
        const tagElem = document.createElement('span')
        tagElem.classList.add('tag')
        tagElem.innerText = tag
        tagsElem.appendChild(tagElem)
    })
}