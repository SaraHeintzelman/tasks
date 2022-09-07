import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header. The text is rather large. Neat.</h1>
            <p>Sara Heintzelman</p>
            <p>Hello World</p>
            <img
                src="https://cdn.discordapp.com/attachments/404501943046635521/1017062602221834351/unknown.png"
                alt="A textured grey background with a stock art image of a frog on the side, without the white background removed, and the text 'Graphic design is my passion'"
            />
            <p>List of the four best Pokemon, objectively.</p>
            <ol>
                <li>Dunsparce</li>
                <li>Dragonite</li>
                <li>Goodra</li>
                <li>Lugia</li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div className="rectangle"></div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="rectangle"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
