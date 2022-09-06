import React from "react";
import { Button } from "react-bootstrap";
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
                src="https://cdn.discordapp.com/attachments/601604932906516500/1011155477457031188/unknown.png"
                alt="A Breaking Bad meme with Walter White looking at cute bunnies. This will be replaced with a different image if I remember to do so."
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
        </div>
    );
}

export default App;
