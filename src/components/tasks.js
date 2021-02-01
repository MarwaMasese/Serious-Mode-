const Tasks = () => {
    const tasks = [
        {
          id:'1',
          title: 'task1',
          description: 'This is task 1 ',
          day:'Feb 12th 2021'
    
        },
        {
          id:'2',
          title: 'task2',
          description: 'This is task 2 ',
          day:'Feb 12th 2021'
        },
        {
          id:'3',
          title: 'task3',
          description: 'This is task 3 ',
          day:'Feb 12th 2021'
        }
      ]
    return (  
        <>
           {tasks.map( (task)=>{
               <h3>{task.title}</h3>
           })} 
        </>
    );
}
 
export default Tasks;