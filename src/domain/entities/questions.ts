import { randomUUID } from "node:crypto";
import { Slug } from "./value-object/slug";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: string;
}
export class Question {
  public id: string;
  public authorId: string;
  public title: string;
  public slug: Slug;
  public content: string;

  constructor(props: QuestionProps, id?: string) {
    this.content = props.content;
    this.authorId = props.authorId;
    this.title = props.title;
    this.slug = props.slug;
    this.id = id ?? randomUUID();
  }
}
