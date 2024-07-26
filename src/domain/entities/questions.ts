import { randomUUID } from "node:crypto";

export class Question {
  private title: string;
  private content: string;
  private id: string;

  constructor(title: string, content: string, id?: string) {
    this.content = content;
    this.title = title;
    this.id = id ?? randomUUID();
  }
}
