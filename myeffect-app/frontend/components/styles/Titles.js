import styled from 'styled-components'

const ProfileTitle = styled.p`
  font-weight: 200;
  color: ${props => props.theme.darkGrey};
  font-size: 28px;
  text-align: left;
  line-height: 23px;
 `;

const ProfileAbout = styled.p`
  font-weight: 200;
  font-size: 17px;
  text-align: left;
  line-height: 20px;
  color: ${props => props.theme.darkGrey};
  margin-top: -20px;
  `;

const SettingsTitle = styled.div`
  /* background: red; */
  grid-column: 1 / -1;
  grid-row: 1;
  font-size: 20px;
  line-height: 40px;
  color: ${props => props.theme.grey};
`;
const SettingsSubTitle = styled.div`
  /* background: red; */
  grid-column: 1 / -1;
  grid-row: 1;
  font-size: 16px;
  line-height: 40px;
  color: ${props => props.theme.grey};
`;


export { ProfileTitle, ProfileAbout, SettingsTitle, SettingsSubTitle } 