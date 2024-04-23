/* type Point {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    lon: number;
} */

let coordinates: Point | Loc = { x: 10, y: 20 };
coordinates = { lat: 10, lon: 20 };

function printAge(age: number | string): void {
  console.log(`your age is ${age}`);
}

printAge(20);
printAge("20");

const stuff: (number | string)[] = [1, "2", 3, "4"];

// custom types
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lon: number;
};

const points: (Point | Loc)[] = [
  { x: 10, y: 20 },
  { lat: 10, lon: 20 },
];
