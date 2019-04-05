listUpvote = [
    {
        "titulo": "BOLSORAIDEN",
        "descricao": null,
        "midia": "http://pm1.narvii.com/6568/b04bdc024fab393165029168336c9618af6d71df_00.jpg",
        "upvote": "1",
        "downvote": "0"
    },
    {
        "titulo": "BOLO DE MILHO KID",
        "descricao": null,
        "midia": "http://images3.memedroid.com/images/UPLOADED236/5a861d20284d8.jpeg",
        "upvote": "3",
        "downvote": "0"
    },
    {
        "titulo": "BOLSO NITRO",
        "descricao": null,
        "midia": "http://images3.memedroid.com/images/UPLOADED236/5a861d20284d8.jpeg",
        "upvote": "2",
        "downvote": "0"
    },

    {
        "titulo": "BOLSO NITRO",
        "descricao": null,
        "midia": "http://images3.memedroid.com/images/UPLOADED236/5a861d20284d8.jpeg",
        "upvote": "4",
        "downvote": "0"
    },

    {
        "titulo": "BOLSO NITRO",
        "descricao": null,
        "midia": "http://images3.memedroid.com/images/UPLOADED236/5a861d20284d8.jpeg",
        "upvote": "5",
        "downvote": "0"
    },

    {
        "titulo": "BOLSO NITRO",
        "descricao": null,
        "midia": "http://images3.memedroid.com/images/UPLOADED236/5a861d20284d8.jpeg",
        "upvote": "6",
        "downvote": "0"
    }
]

const apenasUpvote = listUpvote => listUpvote.upvote


orderUpvote = listUpvote.map(apenasUpvote)

orderUpvote.sort(function(a,b) {
    return b - a 
})

console.log(orderUpvote)