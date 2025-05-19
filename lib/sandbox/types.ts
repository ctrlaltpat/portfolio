export type Person = {
  _id: string;
  age: number;
  eyeColor: "brown" | "blue" | "green";
  name: string;
  gender: "male" | "female";
  location: {
    latitude: number;
    longitude: number;
  };
  preferences: {
    pet: string;
    fruit: string;
  };
};
