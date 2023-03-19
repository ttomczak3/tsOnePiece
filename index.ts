interface Character {
    name: string;
    role: string;
    epithet: string;
    bounty: number;
}

const characters: Character[] = [
    {
        name: "Monkey D. Luffy",
        role: "Captain",
        epithet: "Straw Hat",
        bounty: 150000000,
    },
    {
        name: "Roronoa Zoro",
        role: "Swordsman",
        epithet: "Pirate Hunter",
        bounty: 32000000,
    },
    {
        name: "Nami",
        role: "Navigator",
        epithet: "Cat Burglar",
        bounty: 66000000,
    },
    {
        name: "Usopp",
        role: "Sniper",
        epithet: "God Usopp",
        bounty: 20000000,
    },
    {
        name: "Sanji",
        role: "Cook",
        epithet: "Black Leg",
        bounty: 177000000,
    },
    {
        name: "Tony Tony Chopper",
        role: "Doctor",
        epithet: "Cotton Candy Lover",
        bounty: 100,
    },
    {
        name: "Nico Robin",
        role: "Archaeologist",
        epithet: "Devil Child",
        bounty: 130000000,
    },
        
];

function renderCharacters(characters: Character[]) {
    
    const container = document.getElementById("root");

    if (container) {
        const characterElements = characters.map((character) => {
            const characterDiv = document.createElement("div");
            characterDiv.classList.add("characters");

            const nameElement = document.createElement("h2");
            nameElement.innerText = character.name;
            characterDiv.appendChild(nameElement);

            const roleElement = document.createElement("p");
            roleElement.innerText = `Role: ${character.role}`;
            characterDiv.appendChild(roleElement);

            const epithetElement = document.createElement("p");
            epithetElement.innerText = `Epithet: ${character.epithet}`;
            characterDiv.appendChild(epithetElement);

            const bountyElement = document.createElement("p");
            bountyElement.innerText = `Bounty: ${character.bounty}`;
            characterDiv.appendChild(bountyElement);

            return characterDiv;
        });

        characterElements.forEach((element) => {
            container.appendChild(element);
        });
    }
}

renderCharacters(characters);
