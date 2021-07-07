import { useEffect, useState } from "react";


function Reddit() {

    // Hold posts in state
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // send request
            const res = await fetch("https://www.reddit.com/r/reactjs.json");

            //fetch data
            const json = await res.json();

            setPosts(json.data.children.map(x => x.data));
        };

        fetchData();

        //}) //Witout second argument, useEffect runs on every render. It fetch data, updates state, re-render (circular loop)

    }, setPosts) //If we place setPosts - it's a function created only once. Exact same function every time when components render.

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
};

function RedditChangable({ subreddit }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

            const json = await res.json();

            setPosts(json.data.children.map(x => x.data));
        };

        fetchData();

    }, [subreddit, setPosts])

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
};

export function RedditApp() {

    // We could’ve used just 1 piece of state here – to store the input, 
    // And send the same value down to Reddit – 
    // But then the Reddit component would be fetching data with every keypress.
    const [inputValue, setInputValue] = useState('reactjs');
    const [subreddit, setSubreddit] = useState(inputValue);

    const handleSubmit = e => {
        e.preventDefault();
        setSubreddit(inputValue);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            </form>
            <RedditChangable subreddit={subreddit}/>
        </div>
    )
}