const facts = [
    'I like turtles',
    'I lived on a farm once',
    'I love dumplings',
    'Shawn Mendes is my favourite singer'
]

exports.handler = async (event, context) => {
    const index = Math.floor(Math.random() * facts.length)
    const fact = facts[index]

    return {
        statusCode: 200,
        body: fact
    }
}