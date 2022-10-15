import React from "react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/question";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <div style={{ color: "black" }}>
                <h2>Completed Features</h2>
                <ul className="completedList">
                    <li>
                        {" "}
                        Users can see a list of quizzes, including the quizzes
                        title, description, and how many questions it has (NOT
                        TESTED)
                    </li>
                    <li>
                        Users can select a specific quiz to see the questions,
                        including the questions name, body, and points (NOT
                        TESTED)
                    </li>
                    <li>
                        Quiz questions can be of AT LEAST two types: a short
                        answer question or multiple choice question (NOT TESTED)
                    </li>
                    <li>
                        Users can enter or choose an answer for a quiz question,
                        and be told if they are correct (NOT TESTED)
                    </li>
                    <li>
                        Users can see how many total points they have earned
                        (NOT TESTED)
                    </li>
                    <li>
                        Users can clear out their existing answers for a quiz
                        (NOT TESTED)
                    </li>
                    <li>
                        Users can publish or unpublish a question (NOT TESTED)
                    </li>
                    <li>
                        Users can filter the questions in a list so that only
                        published questions are shown (NOT TESTED)
                    </li>
                    <li>
                        Users can edit the questions and fields of a quiz (NOT
                        TESTED)
                    </li>
                    <li>Users can add a new quiz question (NOT TESTED)</li>
                    <li>
                        Users can delete an existing quiz question (NOT TESTED)
                    </li>
                    <li>Users can reorder quiz questions (NOT TESTED)</li>
                    <li>Users can add a new quiz (NOT TESTED)</li>
                    <li>Users can delete an existing quiz (NOT TESTED)</li>
                </ul>
            </div>
        </div>
    );
}
