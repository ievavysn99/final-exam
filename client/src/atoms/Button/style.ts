import styled from 'styled-components';

const lightModeColors = {
  background: 'var(--primary-color)',
  text: 'var(--text-color)',
  hoverbackground: 'var(--hover-color)',
};

const darkModeColors = {
  background: 'var(--secondary-color)',
  text: 'var(--primary-color)',
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
