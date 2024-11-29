import React, { useState } from 'react';
import Switch from "react-switch";


type Props = {
    onChange?: any
    value?: boolean
}

const CustomSwitch = ( { onChange=()=>{} , value=true }:Props ) => {

    // const [checked, setChecked] = useState(false)
    // const handleChange = () => {
    //     setChecked(!checked)
    // }
    
    return (
        <div className='rounded-full flex justify-center items-center scale-[.7]'>
            <Switch
                onChange={onChange}
                checked={value}
                offColor="#C6E4E5"
                onColor="#008ffb"
                offHandleColor="#fff"
                onHandleColor="#fff"
                boxShadow="0px 0px 2px 3px #008ffb"
                activeBoxShadow="0px 0px 2px 3px #008ffb"
                uncheckedIcon={false}
                checkedIcon={false}
            />
        </div>
    )
}

export default CustomSwitch