import Form from './form'
import Counter from './counter'
import dec, { inc } from './actions'

const double = async (x) => {
  'use server'
  console.log('double function is called on server side');          
  return x * 2
}

export default function Page() {
  return (
    <>
      <Counter
        inc={inc}
        dec={dec}
        double={double}
      />
      <Form />
    </>
  )
}