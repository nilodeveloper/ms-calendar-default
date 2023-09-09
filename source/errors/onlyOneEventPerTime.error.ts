import messages from '../messages/createEvent.message.json'

const onlyAdmCreateEvent = () => {
    return {
        data: {},
        message: messages.onlyOneEvent,
        statusCode: 400
    }
}

export default onlyAdmCreateEvent