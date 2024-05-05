const person = {
    name: 'John Doe',
    age: 30
  };


  var  a = 10;
  let b = 20;
  
//   const newPerson =   Object.create(person);
//   const newPerson2 = Object.assign({},person);
  const newPer = person;
  newPer.age = 45;
//   newPerson.age = 25;
//   person.age = 50;
//   console.log(person)
  console.log(newPer.name);
  console.log(newPer.age);
  console.log(newPer);
  console.log(person);

//   const arr = [1,2,3];
//   console.log(typeof(arr));
//   console.log(typeof([...arr]));

  
  // console.log(newPer);
//   console.log(newPerson2);