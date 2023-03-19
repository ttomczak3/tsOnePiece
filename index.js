var characters = [
    {
        name: "Monkey D. Luffy",
        role: "Captain",
        epithet: "Straw Hat",
        bounty: 150000000
    },
    {
        name: "Roronoa Zoro",
        role: "Swordsman",
        epithet: "Pirate Hunter",
        bounty: 32000000
    },
    {
        name: "Nami",
        role: "Navigator",
        epithet: "Cat Burglar",
        bounty: 66000000
    },
    {
        name: "Usopp",
        role: "Sniper",
        epithet: "God Usopp",
        bounty: 20000000
    },
    {
        name: "Sanji",
        role: "Cook",
        epithet: "Black Leg",
        bounty: 177000000
    },
    {
        name: "Tony Tony Chopper",
        role: "Doctor",
        epithet: "Cotton Candy Lover",
        bounty: 100
    },
    {
        name: "Nico Robin",
        role: "Archaeologist",
        epithet: "Devil Child",
        bounty: 130000000
    },
];
function renderCharacters(characters) {
    var container = document.getElementById("root");
    if (container) {
        var characterElements = characters.map(function (character) {
            var characterDiv = document.createElement("div");
            characterDiv.classList.add("characters");
            var nameElement = document.createElement("h2");
            nameElement.innerText = character.name;
            characterDiv.appendChild(nameElement);
            var roleElement = document.createElement("p");
            roleElement.innerText = "Role: ".concat(character.role);
            characterDiv.appendChild(roleElement);
            var epithetElement = document.createElement("p");
            epithetElement.innerText = "Epithet: ".concat(character.epithet);
            characterDiv.appendChild(epithetElement);
            var bountyElement = document.createElement("p");
            bountyElement.innerText = "Bounty: ".concat(character.bounty);
            characterDiv.appendChild(bountyElement);
            return characterDiv;
        });
        characterElements.forEach(function (element) {
            container.appendChild(element);
        });
    }
}
renderCharacters(characters);
