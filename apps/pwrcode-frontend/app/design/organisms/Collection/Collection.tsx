'use client';
import { searchKeywordAtom } from '@/app/state';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { ReactLogo, SvelteLogo, VueLogo } from '../../atoms/Logo/Logo.stories';
import { DropDown } from '../../molecules/DropDown/DropDown';
import { Box } from '../../molecules/Box/Box';
import { SelectDropDown } from '../../molecules/DropDown/DropDown.stories';
import { SearchBottomBox } from '../../molecules/Box/Box.stories';
import { Logo } from '../../atoms/Logo/Logo';

export interface CollectionProps {
  children?: React.ReactNode;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  width?: string;
  height?: string;
  position?: string;
  zIndex?: string;
  gridTemplateColumns?: string;
  component?: string;
  alignContent?: string;
}

export function Collection(props: CollectionProps) {
  return (
    <Component
      width={props.width}
      height={props.height}
      display={props.display}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      alignContent={props.alignContent}
      flexDirection={props.flexDirection}
      gap={props.gap}
      position={props.position}
      zIndex={props.zIndex}
      gridTemplateColumns={props.gridTemplateColumns}
      component={props.component}
    >
      {props.children}
    </Component>
  );
}

export function SearchCollection(props?: CollectionProps) {
  const [keyword, setKeyword] = useAtom(searchKeywordAtom);

  return (
    <Component
      width={props?.width}
      height={props?.height}
      display={props?.display}
      justifyContent={props?.justifyContent}
      alignItems={props?.alignItems}
      alignContent={props?.alignContent}
      flexDirection={props?.flexDirection}
      gap={props?.gap}
      position={props?.position}
      zIndex={props?.zIndex}
      gridTemplateColumns={props?.gridTemplateColumns}
      component={props?.component}
    >
      {keyword.skill === 'React' ? <Logo {...ReactLogo.args} /> : <></>}
      {keyword.skill === 'Vue' ? <Logo {...VueLogo.args} /> : <></>}
      {keyword.skill === 'Svelte' ? <Logo {...SvelteLogo.args} /> : <></>}
      <DropDown {...SelectDropDown.args} />
      <Box {...SearchBottomBox.args} />
    </Component>
  );
}

const Component = styled.div<CollectionProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  grid-template-columns: ${(props) => props.gridTemplateColumns};

  ${(props) =>
    props.component === `MainCollection` &&
    css`
      div:nth-child(1) {
        grid-column: 1/4;
        grid-row: 1;
      }
      div:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
      }
      div:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
      }
    `}
`;
