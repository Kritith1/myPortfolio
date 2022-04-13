import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'


function Type() {
  return (
    

    <TypeWriterEffect
       textStyle={{
         fontFamily: 'Courier New',
         color: '#3F3D56',
         fontWeight: 500,
         fontSize: '1.5em',
       }}
       startDelay={10}
       cursorColor="#3F3D56"
       multiText={[
         'Some of my Projects',
       ]}
       multiTextDelay={1000}
       typeSpeed={100}
     />
  );
}

export default Type