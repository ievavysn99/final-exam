import styled from 'styled-components';

const lightModeColors = {
  background: '#9FE9F5',
  text: '#fff',
  hoverbackground: '#0E5CE8',
};

const darkModeColors = {
  background: '#fff',
  text: '#0E8AE8',
  hoverbackground: '#eee',
};

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.mode === 'dark'
      ? darkModeColors.background
      : lightModeColors.background};
  color: ${(props) =>
    props.mode === 'dark' ? darkModeColors.text : lightModeColors.text};
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 16px;

  &:hover {
    background-color: ${(props) =>
      props.mode === 'dark'
        ? darkModeColors.hoverbackground
        : lightModeColors.hoverbackground};
  }
`;
