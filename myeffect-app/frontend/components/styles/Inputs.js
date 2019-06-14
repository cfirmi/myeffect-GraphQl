import styled from 'styled-components'

 const SettingsInput = styled.input`
  background: ${props => props.theme.inputbg};
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  border: 1px solid ${props => props.theme.lightgrey};
  height: 50px; width: 100%;
  padding-left: 20px;
  border-radius: 10px; 
  line-height: 48px;
  font-size: 16px;
  color: ${props => props.theme.grey};;
 `;

export { SettingsInput }