function printName(person: { name: string }): void {
  console.log(person.name);
}

printName({ name: 'Alice' });

let coordinates: { x: number; y: number } = {
  x: 10,
  y: 20,
};
