import messages from '../messages/createEvent.message.json'

const createEventSuccess = (data: Event) => {
    return {
        data,
        message: messages.createEventSuccess,
        statusCode: 200
    }
}

export default createEventSuccess