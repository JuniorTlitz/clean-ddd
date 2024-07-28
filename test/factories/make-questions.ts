import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/questions'
import { Slug } from '@/domain/forum/enterprise/entities/value-object/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  return Question.create({
    authorId: new UniqueEntityId(),
    title: 'Example question',
    slug: Slug.create('example-question'),
    content: 'Example content',
    ...override,
  })
}
