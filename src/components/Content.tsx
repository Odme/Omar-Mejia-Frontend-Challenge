import {
  Flex,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => (
  <Flex p={4}>
    {children}
  </Flex>
);

export default Content;
