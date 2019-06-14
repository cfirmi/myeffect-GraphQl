import styled from 'styled-components'
import Profile from '../components/userprofile/userprofile';

 const Outerbox = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  width: 100%;
 `;

const feed = () => (
  <Outerbox>
    <Profile />
  </Outerbox>
);
export default feed
