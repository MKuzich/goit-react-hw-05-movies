import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin-top: ${p => p.theme.space[9]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const BackLink = styled(Link)`
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borders};
  border-radius: ${p => p.theme.radii.small};
  padding: ${p => p.theme.space[3]}px;
`;

export const MoreLink = styled(Link)``;
