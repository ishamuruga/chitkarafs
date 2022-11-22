import React from 'react'
import {add,multiply} from '../services/mathutil';
import adhaar_val from '../services/adhaarvalidate';

export default function Helloworld({message,priority}) {
  const addv = add(5,6);
  const mult = multiply(5,6);
  const aFlag=adhaar_val("232445565353");
  return (
    <>
        <div>helloworld  - {message} - {priority} - {addv} - {mult}</div>
    </>
  )
}
