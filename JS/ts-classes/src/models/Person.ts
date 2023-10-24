import { Address } from "./Address";

export class Person {
  constructor(
    public name: string,
    public age: number,
    public addresses: Address[]
  ) {}
}
