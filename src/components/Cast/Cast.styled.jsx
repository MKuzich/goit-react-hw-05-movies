import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const Card = styled.li`
  width: calc((100% - 4 * ${p => p.theme.space[4]}px;px) / 5);
`;
