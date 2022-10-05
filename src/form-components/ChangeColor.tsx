import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors: string[] = [
        "Crimson",
        "Coral",
        "Moccasin",
        "PaleGreen",
        "Turquoise",
        "MediumPurple",
        "Silver",
        "Azure"
    ];
    const [currentColor, setCurrentColor] = useState<string>(colors[0]);
    function changeColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setCurrentColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="radioColorButtons">
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name={color}
                        label={color}
                        onChange={changeColor}
                        id="color-radio-button"
                        value={color}
                        checked={currentColor === color}
                        style={{ backgroundColor: color }}
                    />
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: currentColor }}
                    >
                        {currentColor}
                    </span>
                </div>
            </Form.Group>
        </div>
    );
}
