
import styled from 'styled-components'
import Signin from '../components/useractions/Signin'
import Signup from '../components/useractions/Signup'


const Outerbox = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr ;
  width: 100vw;
`;

const login = () => (
  <Outerbox>
    <Signin />
    <Signup />
  </Outerbox>
)

export default login
