// Code your solution in this file.
function lowerCaseDrivers(arrayTo){
  const maps = arrayTo.map(x => x.toLowerCase() );
  return maps;
}

function nameToAttributes(names){
 const newObj = names.map(function(name){
   const firstName = name.split(' ')[0];
   const LastName = name.split(' ')[0];


 });



}

function attributesToPhrase(people){
  return people.map(function(person) {
      return `${person.name} is from ${person.hometown}`;
    });
}
