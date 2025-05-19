import { Person } from "./types";
import PeopleJSON from "./people.json";

export const PEOPLE: Person[] = JSON.parse(JSON.stringify(PeopleJSON));

export const NAMES = PEOPLE.map(({ name }) => ({
  firstName: name.split(" ")[0],
  lastName: name.split(" ")[1],
}));
