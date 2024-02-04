// Define a simple class
class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
    }
  
    // Method to get person's information
    getInfo(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Create an instance of the class
  const john = new Person("John Doe", 30);
  
  // Call the method and log the result
  console.log(john.getInfo());
  