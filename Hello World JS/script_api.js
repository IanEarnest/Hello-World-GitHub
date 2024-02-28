
const RANDOM_QUOTE = "http://api.quotable.io/random"

function getRandomQuote() {
    return fetch(RANDOM_QUOTE)
        .then(respon => respon.json())
        .then(data => data.content)
}

async function getNextQuote() {
    const quote = await getRandomQuote()
    return await quote
}

document.body.innerHTML += "Call API..."
//getNextQuote().then(x => { document.body.innerHTML += x });
