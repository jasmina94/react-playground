import React, { useContext, useState } from 'react';

const NumberContext = React.createContext();

const user = {
    name: 'Tijana',
    age: 17
};

const notifiations = ['One', 'Two', 'Three'];

const CurrentUserContext = React.createContext(user);
const NotificationContext = React.createContext(notifiations);

// ******************* Example 1   ************ //
function Display() {
    return (
        <NumberContext.Consumer>
            {value => <div>The answer is {value}.</div>}
        </NumberContext.Consumer>
    )
};

// **** Example 2 ***************//

function HeaderBar() {
    const user = useContext(CurrentUserContext);   //Without wrapping
    const notifiations = useContext(NotificationContext);

    return (
        <header>
            Welcome back {user.name}!
            You have {notifiations.length} notifiations.
        </header>
    )
}

//**** Example 3 ***********//
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
        name: 'light'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        name: 'dark'
    }
};

const ThemeContext = React.createContext({ theme: themes.light, toggleTheme: () => { } });

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    data-name={theme.name}
                    style={{ backgroundColor: theme.background, color: theme.foreground }}>
                    {props.buttonText}
                </button>
            )}
        </ThemeContext.Consumer>

    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton buttonText={props.buttonText} />
        </div>
    )
}

export function ContextExampleApp() {
    const [theme, setTheme] = useState(useContext(ThemeContext));

    const toggleTheme = () => {
        console.log('called change');
        console.log('current:' + JSON.stringify(theme));

        setTheme(theme === themes.dark ? themes.light : themes.dark);

        console.log('new:' + JSON.stringify(theme));
    }

    return (

        // Example 1
        // <NumberContext.Provider value={12} foo={'NameFromContext'}>
        //     <div>
        //         <Display />
        //     </div>
        // </NumberContext.Provider>

        // Example 2
        //<HeaderBar/>


        // Example 3
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <Toolbar buttonText='Finnaly change theme' />
            </ThemeContext.Provider>
            <br />
            <ThemedButton onClick={() => console.log('out of context')} buttonText='Simple button' />
        </div>
    );
};


