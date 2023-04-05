import './Content.css';

import Contador from '../Contador/Contador';

const Content = () => {
    return (
        <div className='content'>
            {/*<button className ='button' onClick ={()=> alert("ENTRALE CHANGO")}>ENTRALE!!</button>*/}
            {/*<ExampleClassComponent />
            <ExampleFunctionComponent name='Darius' edad={42} altura='1,72 mts'/>
            <TaskList/>*/}
            <Contador/>
        </div>
    )
}

export default Content;
