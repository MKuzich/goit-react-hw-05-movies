import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const Card = styled.li`
  width: 100%;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borders};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  transition: ${p => p.theme.transition.scale},
    ${p => p.theme.transition.boxShadow};
  @media screen and (min-width: 480px) {
    width: calc((100% - ${p => p.theme.space[4]}px) / 2);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * ${p => p.theme.space[4]}px) / 3);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 3 * ${p => p.theme.space[4]}px) / 4);
  }
  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.hover};
    scale: 1.01;
  }
`;
