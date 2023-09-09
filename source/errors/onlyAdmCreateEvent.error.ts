import messages from '../messages/createEvent.message.json'

const onlyAdmCreateEvent = () => {
    return {
        data: {},
        message: messages.onlyAdmCanEvent,
        statusCode: 400
    }
}

export default onlyAdmCreateEvent