import Button from './button'
import Tasks from './tasks'
const Header  = ({title,content}) => {
    let name= "Masese"
    let gf = "tasha"
    const clickEvent= () =>{
      console.log('button event')
  }

    return ( 
        <header className='header'>
          <h1>{name}</h1>
          <Button color='green' text='wewe ni nani' clickEvent={clickEvent}/>
        </header>  
     );
}
Header.defaultProps ={
  title: 'Task Tracker',
  content: 'This is the default content '
}
 
export default Header ;