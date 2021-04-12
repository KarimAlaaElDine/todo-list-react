export default function List(props) {
    
    return (
        <div className="list">
            {props.list.map( e =>  <p>{e}</p>)}
        </div>
    )
}
