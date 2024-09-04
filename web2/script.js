import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [item, setItem] = useState('');
    const [udhari, setUdhari] = useState('');
    const [realMoney, setRealMoney] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, { name, item, udhari, realMoney }]);
        setName('');
        setItem('');
        setUdhari('');
        setRealMoney('');
    };

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    };

    return (
        <div>
            {/* Form and Table Code Here */}
        </div>
    );
};

export default App;
