import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { disposeEmitNodes } from "typescript";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightDie, setRight] = useState<number>(2);
    const [leftDie, setLeft] = useState<number>(1);
    return (
        <div>
            <span>
                left-die: {leftDie} - right die: {rightDie}
            </span>
            <div>
                <Button onClick={() => setRight(d6())}>Roll Right Die</Button>
            </div>
            <div>
                <Button onClick={() => setLeft(d6())}>Roll Left Die</Button>
            </div>
        </div>
    );
}
