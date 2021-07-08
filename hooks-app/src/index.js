import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './CallbackExample';

//ReactDOM.render(<Example />, document.getElementById('root'));
//ReactDOM.render(<Form />, document.getElementById('root'));
//ReactDOM.render(<Chat />, document.getElementById('root'));
//ReactDOM.render(<AppLifecycleDemo />, document.getElementById('root'));
//ReactDOM.render(<Reddit />, document.getElementById('root'));
//ReactDOM.render(<RedditChangable subreddit='reactjs'/>, document.getElementById('root'));
//ReactDOM.render(<RedditApp />, document.getElementById('root'));
//ReactDOM.render(<ContextExampleApp/>, document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <Counter />
//         <LazyCounter initialCount={100}/>
//     </div>, document.getElementById('root'));

ReactDOM.render(<Counter/>, document.getElementById('root'));