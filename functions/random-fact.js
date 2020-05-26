const facts = [
    'Fact one.',
    'Fact two.',
    'Fact three.',
    'Fact four.'
]

exports.handler = async (event, context) => {
    const index = Math.floor(Math.random() * facts.length)
    const fact = facts[index]

    return {
        statusCode: 200,
        body: fact
    }
}