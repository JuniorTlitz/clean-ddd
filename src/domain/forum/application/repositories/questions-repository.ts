import { Question } from '../../enterprise/entities/questions'

export interface QuestionRepository {
  findBySlug(slug: string): Promise<Question | null>
  create(questions: Question): Promise<void>
  delete(question: Question): Promise<void>
  findById(id: string): Promise<Question | null>
}
