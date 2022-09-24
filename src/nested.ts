import { urlToHttpOptions } from "url";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

// 1 failing tests
/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 * ---COMPLETE
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 * ---COMPLETE
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter(
        (question: Question): boolean =>
            question.body.trim().length !== 0 ||
            question.expected.trim().length !== 0 ||
            question.options.length !== 0
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 * ---COMPLETE
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const IDquestion = questions.find(
        (question: Question): boolean => question.id === id
    );
    return IDquestion !== undefined ? IDquestion : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * ---COMPLETE
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const questionRemoved = questions.filter(
        (quest1: Question): boolean => quest1.id !== id
    );
    return questionRemoved;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * ---COMPLETE
 */
export function getNames(questions: Question[]): string[] {
    const questionNames: string[] = questions.map(
        (quest1: Question): string => quest1.name
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 * ---COMPLETE
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (totalSum: number, quest4: Question): number =>
            totalSum + quest4.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 * ---COMPLETE
 */
export function sumPublishedPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (totalSum: number, quest5: Question): number =>
            quest5.published ? totalSum + quest5.points : totalSum + 0,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 * ---COMPLETE
 */
export function toCSV(questions: Question[]): string {
    const lines: string[] = questions.map(
        (quest2: Question): string =>
            quest2.id +
            "," +
            quest2.name +
            "," +
            quest2.options.length +
            "," +
            quest2.points +
            "," +
            quest2.published
    );
    const CSVformat: string =
        "id,name,options,points,published\n" + lines.join("\n");
    return CSVformat;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 * ---COMPLETE
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = questions.map(
        (quest1: Question): Answer => ({
            questionId: quest1.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * ---COMPLETE
 */
export function publishAll(questions: Question[]): Question[] {
    const published: Question[] = questions.map(
        (quest3: Question): Question => ({ ...quest3, published: true })
    );
    return published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 * ---COMPLETE
 */
export function sameType(questions: Question[]): boolean {
    const allType = questions.every(
        (quest3: Question): boolean => quest3.type === questions[0].type
    );
    return allType;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * ---COMPLETE
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion: Question[] = [
        ...questions,
        makeBlankQuestion(id, name, type)
    ];
    return newQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * ---COMPLETE
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const changedName: Question[] = questions.map(
        (quest1: Question): Question =>
            targetId === quest1.id
                ? { ...quest1, name: newName }
                : { ...quest1 }
    );
    return changedName;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 * ---COMPLETE
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const changedType: Question[] = questions.map(
        (quest2: Question): Question =>
            targetId === quest2.id
                ? newQuestionType === "multiple_choice_question"
                    ? { ...quest2, type: newQuestionType }
                    : { ...quest2, type: newQuestionType, options: [] }
                : { ...quest2 }
    );
    return changedType;
}
/**
 * a small helper function for editOptions, takes the question, duplicates the options,
 * then splices the new option into it's correct space. to be used when the targetOptionIndex is not
 * -1
 */
export function editOptionsHelper(
    question: Question,
    targetOptionIndex: number,
    newOption: string
): Question {
    const newOptions = [...question.options];
    newOptions.splice(targetOptionIndex, 1, newOption);
    const fixedQuestion: Question = {
        ...question,
        options: [...newOptions]
    };
    return fixedQuestion;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 * ---COMPLETE
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const addedOption: Question[] = questions.map(
        (quest3: Question): Question =>
            targetId === quest3.id
                ? targetOptionIndex === -1
                    ? { ...quest3, options: [...quest3.options, newOption] }
                    : editOptionsHelper(quest3, targetOptionIndex, newOption)
                : { ...quest3 }
    );
    return addedOption;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    return [];
}
