import React, {useState} from 'react';


export default function AddNewItem(props) {
    const [Active, setActive] = useState(false);
    const [newItem, setNewItem] = useState("");
    const [error, setError]= useState(false);
    //setActive(false);
    const change= () =>{
        setActive(!Active)
        setError(false);
    }
    const addItem= (e) =>{
        e.preventDefault();
        e.stopPropagation();
        if(newItem===""){
            setError(true);
        }else{
            setError(false);
            props.AddItem(newItem);
            setNewItem("");
            setActive(false);
        }
        
        
    }
    const itemNameUpdate = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        
        setNewItem(e.target.value);
        
       
    }
    //console.log(props);
    return Active?
     (
         
        <div className="add">
            
            <div className="add-on">
            <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", marginTop:"-2vh"}}>
                <p style={{flexDirection: "row"}}>Add New Todo:</p>
                <p onClick={change} className="add-off">_</p>
            </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", marginTop:"9vh"}}>
                {error? (<div className="error">
                This Input is invalid!
            </div>):(<></>)}
                <input value={newItem} onChange={itemNameUpdate} style={{height:"50%", marginTop:"-15%", borderRadius:"5px"}} inputMode="text"></input>
                <div className="add-button" onClick={addItem}>Add</div>

                </div>
            </div>
        </div>
    ):(
        <div className="add">
        <div onClick={change} className="add-off">
             +   
        </div>
        </div>
    );
}
