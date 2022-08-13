import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin-top: ${p => p.theme.space[9]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
`;

export const BackLink = styled(Link)`
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borders};
  border-radius: ${p => p.theme.radii.small};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  position: fixed;
  right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.primary};
  transition: ${p => p.theme.transition.backgroundColor};
  color: ${p => p.theme.colors.white};
  z-index: 1000;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Poster = styled.img`
  width: 40%;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.title};
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const SecondaryTitle = styled.h1`
  color: ${p => p.theme.colors.title};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const MoreLink = styled(Link)`
  margin-right: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.borders};
  background-color: ${p => p.theme.colors.primary};
  transition: ${p => p.theme.transition.backgroundColor};
  color: ${p => p.theme.colors.white};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Block = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  border-color: ${p => p.theme.colors.borders};
`;
