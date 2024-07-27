import { Entity } from "../../core/entities/entity";

interface QuestionProps {
  content: string;
  authorId: string;
  questionId: string;
}
export class Answer extends Entity<QuestionProps> {
  get content() {
    return this.props.content;
  }
}
