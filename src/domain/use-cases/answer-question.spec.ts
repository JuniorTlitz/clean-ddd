import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.handle({
    questionId: "1",
    content: "Nova resposta",
    instructorId: "1",
  });

  expect(answer.content).toEqual("Nova resposta");
});
