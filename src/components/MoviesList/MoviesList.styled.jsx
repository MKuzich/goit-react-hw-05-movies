import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const Card = styled.li`
  width: calc((100% - 2 * 16px) / 3);
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borders};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  transition: ${p => p.theme.transition.scale},
    ${p => p.theme.transition.boxShadow};
  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.hover};
    scale: 1.01;
  }
`;
