import styled from 'styled-components';

const lightModeColors = {
  background: '#0E8AE8',
  text: '#fff',
  hoverbackground: '#85AADE',
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
  padding: 8px 13px;
  border-radius: 8px;
  font-size: 16px;
  max-width: 300px;

  &:hover {
    background-color: ${(props) =>
      props.mode === 'dark'
        ? darkModeColors.hoverbackground
        : lightModeColors.hoverbackground};
  }
`;
