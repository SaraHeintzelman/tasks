import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <h5>Attempts Left: {attempts}</h5>
            <br></br>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <span> - </span>
            <Button
                onClick={() =>
                    setAttempts(
                        !isNaN(parseInt(requests))
                            ? attempts + parseInt(requests)
                            : attempts
                    )
                }
            >
                gain
            </Button>
            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Request attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequests(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}
