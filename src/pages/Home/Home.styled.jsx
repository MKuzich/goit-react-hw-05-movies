import styled from 'styled-components';

export const Section = styled.section`
  margin-top: ${p => p.theme.space[9]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${p => p.theme.colors.title};
  padding-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.xl};
`;
