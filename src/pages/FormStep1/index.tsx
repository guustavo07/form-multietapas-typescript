import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () =>{
  //novo useHistory para navegação
  const navigate = useNavigate()

  const {state, dispatch} = useForm();

  useEffect(()=>{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  },[])

  const handleNextStep = () =>{
    if(state.name !== ''){
    //novo useHistory para navegação
    navigate('/step2')
    }else{
      alert('Preencha os dados.')
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return(
    <Theme>
      <C.Container>
        <p>Passo 1/4</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label htmlFor="">Seu nome completo
          <input type="text" autoFocus value={state.name} onChange={handleNameChange}/>
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}