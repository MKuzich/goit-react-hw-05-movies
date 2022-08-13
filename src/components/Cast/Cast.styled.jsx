import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const Card = styled.li`
  width: calc((100% - 4 * ${p => p.theme.space[4]}px) / 5);
  position: relative;
`;

export const Title = styled.h2`
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
  color: ${p => p.theme.colors.title};
  padding-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;
