import React, { ReactNode } from 'react';
import Header from '../components/shared/header';
interface Props {
    children : ReactNode,
}
function LayoutDashboard({children}: Props) {
    return (
        <div className='flex w-full justify-center'>
        <div className='w-11/12'>
          <Header/>
          {children}
        </div>
      </div>
    );
}

export default LayoutDashboard;