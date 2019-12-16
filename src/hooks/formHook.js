import {useState} from 'react'

const FormHook = (defaultValue)=>{
    const [value,setValue] = useState(defaultValue)
    const onChangeHandler = e=>{
        setValue(e.target.value)
    }
    const resetValue=()=>{
        setValue('')
    }
    return [value,onChangeHandler,resetValue]
}
export default FormHook