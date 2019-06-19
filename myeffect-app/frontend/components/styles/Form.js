import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  margin-top: 10vh;
  border-radius: 20px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: white;
  border: 5px solid white;
  width: 30vw;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  margin-left: 50%;
  transform: translateX(-50%);
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    margin-left: 50%;
    transform: translateX(-50%);
    width: 20vw;
    padding: 0.5rem 10px;
    font-size: 1.5rem;
    border: 1px solid grey;
    border-radius: 20px;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.white};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    margin-left: 50%;
    transform: translateX(-50%);
    background: ${props => props.theme.lightblue};
    color: white;
    border: 0;
    border-radius: 20px;
    font-size: 1.7rem;
    font-weight: 600;
    padding: 0.9rem 1.6rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #1BA2E7 0%, #00B8F1 50%, #FFD430 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
