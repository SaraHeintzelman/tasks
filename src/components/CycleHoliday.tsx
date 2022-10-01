import React, { useState } from "react";
import { Button } from "react-bootstrap";
// Christmas, Easter, Halloween, Hanukkah, and Fasnacht Day

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🍩");
    function advanceYear(): void {
        if (holiday === "🍩") {
            setHoliday("🐇");
        } else if (holiday === "🐇") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🕎");
        } else if (holiday === "🕎") {
            setHoliday("🎅");
        } else {
            setHoliday("🍩"); // if it's christmas, go to fasnacht day
        }
    }
    function advanceAlphabet(): void {
        if (holiday === "🎅") {
            setHoliday("🐇");
        } else if (holiday === "🐇") {
            setHoliday("🍩");
        } else if (holiday === "🍩") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🕎");
        } else {
            setHoliday("🎅"); // if it's hanukkah, go to christmas
        }
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <div>
                <Button onClick={() => advanceYear()}>Advance by year</Button>
            </div>
            <div>
                <Button onClick={() => advanceAlphabet()}>
                    Advance by alphabet
                </Button>
            </div>
        </div>
    );
}
