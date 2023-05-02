import Counter from './counter'
import Form from './form'

import dec, { inc } from './actions'

export default function Page() {
  const two = 2
  return (
    <>
      <Counter
        inc={inc}
        dec={dec}
        double={async (x) => {
          'use server'
          console.log('this is in use server function');          
          return x * two
        }}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Form />
    </>
  )
}