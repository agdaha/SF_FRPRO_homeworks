const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);

const persons = data.list;

let result = {
  list :[ ]
}

persons.forEach((person) => {
  result.list.push(
    {
      name: person.name, 
      age: person.age, 
      prof: person.prof
    }
  )
});

console.log(result);
