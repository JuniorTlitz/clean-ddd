import { randomUUID } from "node:crypto";

export class Instructor {
  private name: string;
  private id: string;

  constructor(name: string, id?: string) {
    this.name = name;
    this.id = id ?? randomUUID();
  }
}
