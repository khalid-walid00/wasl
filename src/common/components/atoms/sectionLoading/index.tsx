'use client'
import React from 'react'
import loading from '../../../../../public/assets/animations/processAnimation.json'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false
});
type TProps = {
  icon?:any,
  style?:any
}
const index = ({icon = loading,style={ width: 400, height: 400 }}:TProps) => {
  return (
    <div className='min-h-screen flex justify-center items-center'> 
      <Lottie animationData={icon} loop style={style}
/>


    </div>
  )
}

export default index