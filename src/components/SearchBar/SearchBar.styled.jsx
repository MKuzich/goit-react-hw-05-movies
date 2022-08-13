import styled from 'styled-components';

export const Form = styled.form`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  border-color: ${p => p.theme.colors.borders};
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.primary};
  outline: none;
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const Button = styled.button`
  margin-left: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.darkText};
  }
`;
