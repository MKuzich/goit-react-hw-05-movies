import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  color: ${p => p.theme.colors.darkText};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  :hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.darkAccent};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
