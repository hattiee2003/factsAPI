let facts = [
    {fact: 'I have a dog 🐕', real: true},
    {fact: 'I lived in Malaysia 🏠', real: false},
    {fact: 'I lived on a farm once 🌱', real: true},
    {fact: 'I love buttered toast 🍞', real: false},
    {fact: 'Shawn Mendes is my fav singer 🎵', real: true},
    {fact: 'Monkeys are my favourite animal 🐒', real: false}
]

exports.handler = async (event, context) => {
    let index = Math.floor(Math.random() * facts.length)
    outputFact = facts[index].fact

    return {
        statusCode: 200,
        body: facts
    }
}
