import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep4 = () =>{
  //novo useHistory para navegação
  const navigate = useNavigate()

  const {state, dispatch} = useForm();

  useEffect(()=>{
    if(state.name ===''){
      navigate('/')
    }else{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4
    });
  } 
  },[])

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  const getLevelDescription = (level: number) => {
    switch (level) {
      case 0:
        return "Sou Iniciante";
      case 1:
        return "Sou Programador";
      default:
        return "";
    }
  }

  const resetForm = () => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
    dispatch({
      type: FormActions.setName,
      payload: '',
    });
    dispatch({
      type: FormActions.setEmail,
      payload: '',
    });
    dispatch({
      type: FormActions.setGithub,
      payload: '',
    });
    dispatch({
      type: FormActions.setLevel,
      payload: 0,
    });
    navigate('/')
  };

  return(
    <Theme>
      <C.Container>
        <p>Passo 4/4</p>
        <h1>Cadastro Finalizado!</h1>
        <p>Confira abaixo seus dados</p>

        <hr />

        <h2>Nome <p>{state.name}</p></h2>
        <h2>Seu estado atual <p>{getLevelDescription(state.level)}</p></h2>
        <h2>Seu email <p>{state.email}</p></h2>
        <h2>Seu Github <p>{state.github}</p></h2>

        <Link className='backButton' to='/step3'>Voltar</Link>
        <button onClick={resetForm}>Novo cadastro</button>
      </C.Container>
    </Theme>
  )
}