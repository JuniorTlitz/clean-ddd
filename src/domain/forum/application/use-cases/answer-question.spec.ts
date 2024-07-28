import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '../../enterprise/entities/answer'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    console.log(answer)
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.handle({
    questionId: '1',
    content: 'Nova resposta',
    instructorId: '1',
  })

  expect(answer.content).toEqual('Nova resposta')
})
