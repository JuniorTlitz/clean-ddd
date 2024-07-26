import { randomUUID } from "node:crypto";

export class Answer {
  private content: string;
  private id: string;

  constructor(content: string, id?: string) {
    this.content = content;
    this.id = id ?? randomUUID();
  }
}
