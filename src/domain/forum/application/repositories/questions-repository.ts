import { Question } from '../../enterprise/entities/questions'

export interface QuestionRepository {
  create(questions: Question): Promise<void>
}
