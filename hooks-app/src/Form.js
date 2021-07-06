import React, { useEffect, useState } from "react";

export function Form() {
    const [name, setName] = useState('Mary');
    useEffect(function persistForm() {
        if (name !== '') {
            localStorage.setItem('formData', name);
        }
    });

    const [surname, setSurname] = useState('Poppins');
    useEffect(function updateTile() {
        document.title = name + ' ' + surname;
    });

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }

    const handleFormSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        if (name !== '' && surname !== '') {
            localStorage.setItem('formData', JSON.stringify({ 'name': name, 'surname': surname }));
        }

        setName('');
        setSurname('');
    }

    return (
        <div>
            <form id="customForm" path="/#" onSubmit={handleFormSubmit}>
                <p><input value={name} type="text" id="name" onChange={handleNameChange} /></p>
                <p><input value={surname} type="text" id="surname" onChange={handleSurnameChange} /></p>
                <p><button type="submit">Submit</button></p>
            </form>
        </div>
    )
};