import { FunctionComponent, ReactElement,
    PropsWithChildren
} from 'react'
import { Box as BoxUI } from '@chakra-ui/react'
import React from 'react'

interface BoxProps extends PropsWithChildren{
    children: ReactElement 
}

export function Box(props: BoxProps) {
    return (
        <BoxUI>
            {props.children}
        </BoxUI>
    )
}
