import { Question } from '../../enterprise/entities/questions'

export interface QuestionRepository {
  findBySlug(slug: string): Promise<Question | null>
  create(questions: Question): Promise<void>
}
