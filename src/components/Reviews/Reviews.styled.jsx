import styled from 'styled-components';

export const Card = styled.li`
  margin-top: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[6]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  border-color: ${p => p.theme.colors.borders};
`;

export const Title = styled.h2`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  text-align: center;
  color: ${p => p.theme.colors.title};
  font-size: ${p => p.theme.fontSizes.l};
`;
