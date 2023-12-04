import React from 'react'
import '../tabletop/tabletop.css'
import fighter from '../assets/images/fighters.png'

const Tabletop = () => {
  return (
    <>
      <div className='container-full'>
        <div className='tabletop-main'>
          <h1 className='container-tabletop'>tabletop</h1>
          <p className='container-roleplay '>what is <span className='container-span-roleplay'>tabletop roleplay</span>?</p>
        </div>
        <div className='container_rarer'>
          <div className='fighter_heading'>
            <div>
            <img src={fighter} className='cliped-fighter2' />
            </div>
            <div className='w_tabletop '>
                 <h1 className='w_fighter_heading'>heading</h1>
                <p className='pera_heading'>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
               </p>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabletop

  // < div >
  //             <img src={fighter} className='cliped-fighter2' />
  //             <div className='w_tabletop default-padding'>
  //               <h1 className='w_fighter_heading'>heading</h1>
  //               <p className='pera_heading'>
  //                 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
  //               </p>
  //             </div>
  //             <div className='default-padding'>
  //               <img src={fighter} className='cliped-fighter2' />
  //             </div>
  //           </div >
  // <div className='w_tabletop'>
  //   <h1 className='w_fighter_heading'>heading</h1>
  //   <p className='pera_heading'>
  //     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
  //   </p>
  //   <div className='default-padding'>
  //     <img src={fighter} className='cliped-fighter2' />
  //   </div>
  //   <div className='w_tabletop default-padding'>
  //     <h1 className='w_fighter_heading'>heading</h1>
  //     <p className='pera_heading'>
  //       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
  //     </p>
  //   </div>
  // </div>