import React , {useState,useEffect} from 'react'
import './form.css';
function Cgpa() {
    const [cgpa,setAdd] = useState({sem1:"",
     sem2:"", sem3:"",
     sem4:"", sem6:"",
     sem5:"", sem7:"",
     sem8:"",
    
    
    });
    const [sum,setSum] = useState(0)
    useEffect(()=>{
         setSum(Math.floor(parseInt(cgpa.sem1)+parseInt(cgpa.sem2)+parseInt(cgpa.sem3)+
         parseInt(cgpa.sem4)+parseInt(cgpa.sem5)+parseInt(cgpa.sem6)+parseInt(cgpa.sem7)+parseInt(cgpa.sem8))/8) 
    },[cgpa])
  
    return (
        <form className>
           <h1>CGPA CALCULATOR</h1>
    <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 1</label>
    <input type="text" className="form-control " id="exampleInputEmail1"
     value={cgpa.sem1} 
     onChange={e =>setAdd({...cgpa,sem1:e.target.value})} />   
    <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 2</label>
    <input type="text" className="form-control " id="exampleInputEmail1"
     value={cgpa.sem2} 
     onChange={e =>setAdd({...cgpa,sem2:e.target.value})} />   
      <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 3</label>
    <input type="text" className="form-control " id="exampleInputEmail1"
     value={cgpa.sem3} 
     onChange={e =>setAdd({...cgpa,sem3:e.target.value})} />
     <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 4</label>
    <input type="text" className="form-control " id="exampleInputEmail1"
     value={cgpa.sem4} 
     onChange={e =>setAdd({...cgpa,sem4:e.target.value})} />          
    <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 5</label>
    <input type="text" className="form-control " id="exampleInputEmail1"
     value={cgpa.sem5} 
     onChange={e =>setAdd({...cgpa,sem5:e.target.value})} />   
    <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 6</label>
    <input type="text" className="form-control " id="exampleInputEmail1"
     value={cgpa.sem6} 
     onChange={e =>setAdd({...cgpa,sem6:e.target.value})} />             
      <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 7</label>
    <input type="text" className="form-control" id="exampleInputEmail1"
     value={cgpa.sem7} 
     onChange={e =>setAdd({...cgpa,sem7:e.target.value})} />                     
         <label forhtml="exampleInputEmail1" class="form-label my-2">SEM 8</label>
    <input type="text" className="form-control" id="exampleInputEmail1"
     value={cgpa.sem8} 
     onChange={e =>setAdd({...cgpa,sem8:e.target.value})} />             
               <button onClick={e => alert(sum)} className="btn btn-dark mx-auto my-3">Answer</button>
              {/* <button onClick={e=>setAdd("")} className="btn btn-primary mx-3">Reset</button> */}
        </form>
    )
}

export default Cgpa
//  value={cgpa.sem1} 
// onChange={e =>setAdd({...cgpa,sem1:e.target.value})}