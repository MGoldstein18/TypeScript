let hello: string = "hello";

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log(getFullName("mordi", "goldstein"));

interface User {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: User = {
  name: "monster",
  age: 30,
  getMessage() {
    return "Hello" + name;
  },
};

const user2: User = {
  name: "Jack",
  getMessage(){
      return "Hello"
  }
};
