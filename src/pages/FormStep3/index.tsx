import * as C from './styles';
import { useNavigate, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () =>{
  //novo useHistory para navegação
  const navigate = useNavigate()

  const {state, dispatch} = useForm();

  useEffect(()=>{
    if(state.name ===''){
      navigate('/')
    }else{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
  } 
  },[])

  const handleNextStep = () =>{
    if(state.email !== '' || state.github !== ''){
      navigate('/step4')
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

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setEmail,
      payload:e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setGithub,
      payload:e.target.value
    })
  }


  return(
    <Theme>
      <C.Container>
        <p>Passo 3/4</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Informe seus dados para conseguirmos entrar em contato.</p>

        <hr />

        <label htmlFor="">Qual seu e-mail?
          <input type="text" value={state.email} onChange={handleEmailChange}/>
        </label>
        <label htmlFor="">Qual seu GitHub?
          <input type="text" value={state.github} onChange={handleGithubChange}/>
        </label>

        <Link className='backButton' to='/step2'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )
}