import {
  Box,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => (
  <Box p={4}>
    {children}
  </Box>
);

export default Content;
