import './Content.css';

import Contador from '../Contador/Contador';
import ExampleFunctionComponent
  from '../ExampleComponent/ExampleFunctionComponent';
import TaskList from '../ExampleTaskList/TaskList';

const Content = () => {
    return (
        <div className='content'>
            <hr />
           <button className ='button' onClick ={()=> alert("ENTRALE CHANGO")}>ENTRALE!!</button>
            
            <ExampleFunctionComponent name='Darius' edad={42} altura='1,72 mts'/>
            <Contador/>
            <TaskList />
           
        </div>
    )
}

export default Content;

 