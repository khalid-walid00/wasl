import React from 'react'
import Bar from '../bar'

const Referrer = ({data}:any) => {
  return (
          <Bar
          data={data}
          title={"العدد"}
          loading={false}
          name="العدد"
        />
  )
}

export default Referrer