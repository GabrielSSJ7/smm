const fs = require("fs")
const path = './categorias.json';

function save() {
    const content = [
        "Global",
        "Montage",
        "Music",
        "Crossover",
        "Politics",
        "Non Sense",
        "Food",
        "Science",
        "F",
        "History",
        "Social Media",
        "Text",
        "Cartoons",
        "Questions",
        "Spooky",
        "ShitPost",
        "Dank",
        "Photoshop",
        "Games",
        "Techno",
        "News",
        "Reviews",
        "Dark",
        "People",
        "Dangerous",
        "Anime",
        "Loud",
        "Automobiles",
        "Draw",
        "Illusion",
        "Lit",
        "Hummm",
        "Diss Track",
        "Edition",
        "Compilation",
        "Collab",
        "HQs",
        "Movies",
        "Brands",
        "Animals",
        "Warnings",
        "Manga",
        "OldSchool",
        "Events",
        "Art",
        "Magic",
        "Slav",
        "Cosplay"
    ]

    const stringJson = JSON.stringify(content);

    return fs.writeFileSync(path, stringJson);
}

function load() {
    const fileBuffer = fs.readFileSync(path, 'utf-8');
    const json = JSON.parse(fileBuffer)

    console.log(json);
    
}

save();
load();