import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)``;

export const Title = styled.h2`
  color: ${p => p.theme.colors.primary};
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
`;
