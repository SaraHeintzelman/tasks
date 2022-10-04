import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(!student);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="toggle-edit-mode"
                label="edit mode on/off"
                checked={editMode}
                onChange={updateEditMode}
            />
            <div>
                {editMode && (
                    <div>
                        <div>
                            <Form.Group controlId="formStudentName">
                                <Form.Label>Edit Name:</Form.Label>
                                <Form.Control
                                    value={userName}
                                    onChange={updateName}
                                ></Form.Control>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Check
                                type="switch"
                                id="is-student=check"
                                label="Is a student?"
                                checked={student}
                                onChange={updateStudent}
                            />
                        </div>
                    </div>
                )}
            </div>
            <h5>
                {!editMode && (
                    <div>
                        {userName} is{" "}
                        {student ? "a student." : "not a student."}
                    </div>
                )}
            </h5>
        </div>
    );
}
