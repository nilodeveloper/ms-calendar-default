import messages from '../messages/createEvent.message.json'

const generic = () => {
    return {
        data: {},
        message: messages.genericError,
        statusCode: 500
    }
}

export default generic