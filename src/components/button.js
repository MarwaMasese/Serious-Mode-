const Button = ({color, text, clickEvent}) => {
    return ( 
        <button className='btn' style={{backgroundColor: color}} onClick={clickEvent} > {text}</button>
     );
}
 
export default Button;