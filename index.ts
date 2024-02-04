// Function with explicit return type
function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  // Interface
  interface Person {
    name: string;
    age: number;
  }
  
  // Function that takes an object with a specific structure
  function printPerson(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }
  
  // Usage
  const newPerson: Person = { name: "Alice", age: 30 };
  printPerson(newPerson);
  