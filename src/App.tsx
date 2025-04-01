import React from 'react';
import Title from './components/title';
import Form from './components/form';
import Hobby1 from './components/hobby1';
import Hobby2 from './components/hobby1';
import Table1 from './components/table1';
import List1 from './components/list1';


function App() {


    return(
        <div className="p-10">
            <h1 className="font-bold text-xl pb-4">Example Page</h1>
            <Title />
            <Form />
            <Hobby1 />
            <Hobby2 />
            <List1 />
            <Table1 />
        </div>
    );
};

export default App;
