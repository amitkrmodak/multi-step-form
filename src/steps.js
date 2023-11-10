function Steps(props){
    return(
        <div>
            <div ><span style={{borderRadius:'50%', border:'2px solid black'}}>{props.number}</span></div>
            <div>STEP {props.number}</div>
            <div>{props.name}</div>
        </div>
    );
}
export default Steps;