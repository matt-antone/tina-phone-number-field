import { SchemaField } from "tinacms"
export const formatPhoneNumber = input => {
  console.log('formatPhoneNumber')
  input = input.replace(/[a-zA-z]/,'')
  if(!input){
    return input
  }
  const phone = input.replace(/[^\d]/g,'')
  if(phone.length < 4) return input
  if(phone.length < 7) {
    return `(${phone.slice(0,3)}) ${phone.slice(3)}`
  }
  return `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`
}

const defaultPhone: SchemaField = {
  label: "Phone",
  name: "phone",
  type: "string",
  list: false,
  ui: {
    parse: (value) => {
      console.log('formatPhoneNumber')
      return formatPhoneNumber(value)
    },
  }
}

export const getPhoneField = ({label = "Phone", name = "phone"}) => {
  return {...defaultPhone, label: label, name: name}
}

export default defaultPhone