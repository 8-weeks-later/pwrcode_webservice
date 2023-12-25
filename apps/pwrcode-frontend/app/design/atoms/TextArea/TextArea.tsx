'use client';

import styled from '@emotion/styled';
import Markdown from 'react-markdown';
import React from 'react';
import remarkMdx from 'remark-mdx';
import remarkBreaks from 'remark-breaks';
import Editor from '@monaco-editor/react';

export interface TextAreaProps {
  fontFamily: string;
  text?: string;
  fontStyle: string;
  fontWeight: string;
  margin?: string;
  fontSize: string;
  lineHeight?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  flexShrink?: string;
  color?: string;
  flex?: string;
  display?: string;
  overflow?: string;
  alignSelf?: string;
  gridTemplateColumns?: string;
  gap?: string;
  gridAutoFlow?: string;
}

export function TextArea(props: TextAreaProps) {
  return (
    <Component
      fontFamily={props.fontFamily}
      fontStyle={props.fontStyle}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      lineHeight={props.lineHeight}
      textAlign={props.textAlign}
      margin={props.margin}
      width={props.width}
      height={props.height}
      flexShrink={props.flexShrink}
      color={props.color}
      flex={props.flex}
      display={props.display}
      overflow={props.overflow}
      alignSelf={props.alignSelf}
      gridTemplateColumns={props.gridTemplateColumns}
      gap={props.gap}
      gridAutoFlow={props.gridAutoFlow}
    >
      <Markdown
        components={{
          img(props) {
            const { src, ...rest } = props;
            return <img src={src} width={'100vw'} {...rest} />;
          },
          //           <code class="language-javascript">
          code(props) {
            const { children, className, node, ...rest } = props;
            const language = className?.match(/language-(\w+)/)?.at(1);
            return (
              <Editor
                defaultValue={String(children)}
                defaultLanguage={language}
                options={{
                  // domReadOnly: 'false'
                  codeLens: 'false',
                  fontSize: 20,
                }}
                theme="vs-dark"
              />
            );
          },
        }}
        remarkPlugins={[remarkMdx, remarkBreaks]}
      >
        {props.text}
      </Markdown>
    </Component>
  );
}

const Component = styled.div<TextAreaProps>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: ${(props) => props.flexShrink};
  color: ${(props) => props.color};
  flex: ${(props) => props.flex};
  display: ${(props) => props.display};
  overflow: ${(props) => props.overflow};
  align-self: ${(props) => props.alignSelf};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  gap: ${(props) => props.gap};
  grid-auto-flow: ${(props) => props.gridAutoFlow};
  cursor: pointer;
  &::-webkit-scrollbar {
    background: #f2f5f7;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ebe3d5;
    border-radius: 10px;
  }
`;
