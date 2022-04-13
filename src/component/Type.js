import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'


function Type() {
  return (
    

    <TypeWriterEffect
       textStyle={{
         fontFamily: 'Georgia',
         color: '#3F3D56',
         fontWeight: 500,
         fontSize: '1.5em',
       }}
       startDelay={10}
       cursorColor="#3F3D56"
       multiText={[
         'Software Developer',
         'Coding is life',
       ]}
       multiTextDelay={1000}
       typeSpeed={100}
     />
  );
}

export default Type