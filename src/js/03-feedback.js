import throttle from 'lodash.throttle';

const textarea = document.querySelector('textarea')
const form = document.querySelector('form')
const input = document.querySelector('input')

const STORAGE_KEY = "feedback-form-state"

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)


function onFormInput() {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(onGettingUserData()))

}


function onFormSubmit(event) {
    event.preventDefault()

    console.log(onGettingUserData());

    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}


function onGettingUserData() {
    const formElements = event.currentTarget.elements

    const mail = formElements.email.value
    const message = formElements.message.value

    const userData = {
        mail,
        message
    }

    return userData
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    const parsedMessage = JSON.parse(savedMessage)

    if (savedMessage) {
        input.value = parsedMessage.mail
        textarea.value = parsedMessage.message

    }

}
populateTextarea()