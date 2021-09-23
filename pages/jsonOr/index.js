// import React,{useRef} from 'react'
// import fs from 'fs/promises'


// export default function index() {


// const nameRef = useRef();
// const passRef = useRef();

// const submitHandler= async()=>{
//   const name = useRef(nameRef);
//   const pass = useRef(passRef);
 
//   const product = {
//                  name : name.current.value,
//                  password : pass.current.value
//   }

//  await fs.writeFile("../jsonOr/data.json" , JSON.stringify(product))


// }




//                return (
//                               <div>

//                            <form onSubmit={submitHandler}>
//                               <input type="text" ref={nameRef} placeholder="name"></input>
                             
//                               <input type="text" ref={passRef} placeholder="password"></input>
                             
//                              <input type="submit" name="submit" value="submit"/>

//                            </form>


//                               </div>
//                )
// }
