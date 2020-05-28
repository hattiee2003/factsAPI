const facts = [
    'I like turtles🐢',
	'I lived on a farm once🌱',
	'I lived in Singapore',
	'I can swim🏊🏼‍♀️',
	'I love dumplings',
	'Why Dont We is my favourite band🎵'
]

exports.handler = async (event, context) => {
    const index = Math.floor(Math.random() * facts.length)
    const fact = facts[index]

    return {
        statusCode: 200,
        body: fact
    }
}