import styled from 'styled-components';

export const Title = styled.h3`
  color: ${p => p.theme.colors.title};
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  position: relative;
  :after {
    position: absolute;
    width: 100%;
    bottom: -${p => p.theme.space[3]}px;
    left: 0;
    content: '';
    border-bottom: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.borders};
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
`;
