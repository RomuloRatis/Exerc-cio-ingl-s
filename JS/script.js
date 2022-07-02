let Comedy = [

    {
        title: "The Great Dictator",
        director: "Charles Chaplin",
        year: 1940
    },
    {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994
    },
    {
        title: "Relatos Salvajes",
        director: "Damián Szifron",
        year: 2014
    }

]

let Action = [

    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994
    },

    {
        title: "Fight Club",
        director: "David Fincher",
        year: 1999
    },

    {
        title: "Oldboy",
        director: "Park Chan-wook",
        year: 2003
    }
]

let Fantasy = [

    {
        title: "the Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        year: 2003
    },

    {
        title: "Big Fish",
        director: "Tim Burton",
        year: 2003
    },

    {
        title: "Edward Scissorhands",
        director: "Tim Burton",
        year: 1990
    }
]

console.log(Comedy, Action, Fantasy)

if(Action[0].year === 1994){
    console.log("My favorit movie is", Action[0].title)
}else{
    console.log("Minha mãe é uma peça NOT EVEN 1 STARS")
}
