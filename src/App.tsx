import React from 'react';
import Title from './components/title';
import Intro from './components/intro';
import Form from './components/form';
import Form2 from './components/form2';
import Hobby1 from './components/hobby1';
import Hobby2 from './components/hobby2';
import Table1 from './components/table1';
import Table2 from './components/table2';
import List1 from './components/list1';
import List2 from './components/list2';


function App() {
    const studentNames = ["Ryan Zhang", "Matthew Alex"];

    return(
        <div className="p-10">
            <Title />
            <Intro names={studentNames}/>

            <Hobby1 />
            <List1 />

            <Table1 />
            <Form/>


            <Hobby2 />
            <List2/>
            <Table2/>
            <Form2/>

        </div>
    );
};

export default App;
