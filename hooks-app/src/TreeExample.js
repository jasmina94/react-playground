
import * as React from 'react';
import { useState } from "react";
export const Parent = () => {
    const [state, setState] = useState([
        {
          title: "First Item",
          description: "This is the first item",
          isOpen: false
        },
        {
          title: "Second Item",
          description: "This is the Second item",
          isOpen: false
        },
        {
          title: "Third Item",
          description: "This is the Third item",
          isOpen: false
        }
      ]);

      return (
          <ul>
              {state.map((item, index) => {
                  return (
                      <li>
                          <Child item={item} arr={state} setItem={setState}/>
                      </li>
                  )
              })}
          </ul>
      )
}


const Child = (props) => {
    let {item, arr, setItem} = props;

    const onToggle = (it) => {
        let newArr = arr.map(data => {
            data.isOpen = data.title === it.title;
            return data;
        });
        setItem(newArr);
    }

    return (
        <div key={item.title}>
            <label onClick={() => onToggle(item)}>{item.title}</label>
            {item.isOpen && <p>{item.description}</p>}
        </div>
    );
}