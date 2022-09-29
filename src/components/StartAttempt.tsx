import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { setConstantValue } from "typescript";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);

    function startQuiz(): void {
        setStarted(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setStarted(false);
    }

    return (
        <div>
            <div>Remaining Attempts: {attempts}</div>
            <span>
                <Button
                    onClick={() => startQuiz()}
                    disabled={started || attempts === 0}
                >
                    Start Quiz
                </Button>
            </span>
            <span>
                <Button onClick={() => stopQuiz()} disabled={!started}>
                    Stop Quiz
                </Button>
            </span>
            <span>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={started}
                >
                    Mulligan
                </Button>
            </span>
        </div>
    );
}
