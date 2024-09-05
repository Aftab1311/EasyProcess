import Image from 'next/image';
import Heading from './ui/Heading';

// export default function Process() {
//     return (
//         <section className="py-12 bg-white">
//             <Heading>
//                 Process
//             </Heading>
            
//             <Image src= "/Process Model.png" width={100} height={100} alt="Process" 
//             // style={{
//                 // width:100%
                
//             // }}
//             // className=" w-full h-full py-12  md:px-12 md:flex hidden bg-white"
//              />
//             {/* <Image src= "/easymyprocess.gif" width={2000} height={2000} alt="Process" className=" w-full h-full py-12  px-4 md:hidden bg-white" /> */}
//         </section>
//     )
// }

import React from 'react'

const Process = () => {
  return (
    <>
    <div 
    style={{display:"grid", justifyContent:"center", gap:"2.5rem", padding:"3rem"
    }}
    >
    <div style={{display:"flex", justifyContent:"center", fontSize:"3rem", fontWeight:"bold"}}>
        Process
        </div>
        <div>
        <Image
        src= "/Process Model.png" alt="Process" width={100} height={100} style={{width:"30rem", height:"30rem"}}/>
    </div>
    </div>
    </>
    
  )
}

export default Process