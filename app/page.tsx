import Counter from './counter'
import Form from './form'

import dec, { inc } from './actions'





const double = async (x) => {
  'use server'
  console.log('log in server side');          
  return x * 2
}




double 


export default function Page() {
  const two = 2
  return (
    <>
      <Counter
        inc={inc}
        dec={dec}





        double={async (x) => {
          'use server'
          console.log('log in server side');          
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