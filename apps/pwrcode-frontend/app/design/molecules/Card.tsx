import { FunctionComponent, ReactElement,
    PropsWithChildren
} from 'react'
import { Box as CardUI } from '@chakra-ui/react'
import React from 'react'

interface CardProps extends PropsWithChildren{
    children: ReactElement 
}

export function Card(props: CardProps) {
    return (
        <CardUI>
            {props.children}
        </CardUI>
    )
}
