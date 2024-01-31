import React from 'react'
import { Forma } from './index.styled'
export default function Input({name,a}) {
  return (
    <Forma>
    <label htmlFor="input">{name}<span>*</span></label>
    <input type="text" placeholder={a} />
    </Forma>
  )
}
