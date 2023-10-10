import { useState } from "react"

export const useForm = (initialValue = {}) => {

  const [initialForm, setInitialForm] = useState(initialValue);

  const onChangeNombre = ({target}) => {
    const {name, value} = target;
    setInitialForm({
      ...initialForm,
      [name]: value
    })
  }

  const resetForm = () => {
    setInitialForm(initialValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm()
  }


  return {
    initialForm,
    ...initialForm,
    onChangeNombre,
    resetForm,
    handleSubmit,
  }
}
