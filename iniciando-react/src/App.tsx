import { useState } from "react";
import { Tweet } from "./components/Tweet";
import * as _ from "lodash";
import "./css/App.css";

function App() {
    const [tweets, setTweets] = useState<string[]>([
        "tweet 1",
        "tweet 2",
        "tweet 3",
        "tweet 4",
    ]);

    const createTweet = () => {
        setTweets([...tweets, "tweets 5"]);
    };

    return (
        <div>
            {_.map(tweets, (tweet) => {
                return <Tweet text={tweet} />;
            })}
            <button
                style={{
                    backgroundColor: "#8225e6",
                    border: 0,
                    padding: "6px 12px",
                    color: "#fff",
                }}
                onClick={createTweet}
            >
                Adicionar tweet
            </button>
        </div>
    );
}

export default App;
