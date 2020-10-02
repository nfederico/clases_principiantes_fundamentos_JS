/**
 * Ej04:
Dado el array de objetos Users, crear un funcion que genere la sigueinte salida:
El usuario Diego posee las siguientes habilidades: Javascript, ReactJS, Redux
El usuario Gabriel posee las siguientes habilidades: VueJS, Ruby on Rails, Elixir
 */
var users = [
    {
    name: "Diego",
    skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
    name: "Gabriel",
    skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }

   ];


function skills() {
for (const user in users) {
   console.log(`El usuario ${users[user].name} posee las siguientes habilidades: ${users[user].skills.join(', ')}`);
    }
}

function skillsv2(){
    users.forEach(user => {
        console.log(`El usuario ${user.name} posee las siguientes habilidades: ${user.skills.join(', ')}`);
    });
}

function hasSkills(skill) {
    console.log (!(skillsArray.indexOf(skill) === -1 ));
}

skills();

skillsv2();

/*
EJ03
Dado le vector SkillsArray  generar una funcion que dada una habilidad te responda con un verdadero o falso  

*/
var skillsArray = ["Javascript", "ReactJS", "React Native"];

hasSkills('Javascript');