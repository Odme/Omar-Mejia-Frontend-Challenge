import {
  Flex,
  Spinner,
  Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,
} from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchAllPairings } from '../store/pairingSlice';
import { selectPairings } from '../store/selectors';

const Dashboard = () => {
  const [pairings, loading] = useAppSelector(selectPairings);
  const dispatch = useAppDispatch();

  const fetchAll = useCallback(async () => {
    const resultAction = await dispatch(fetchAllPairings());
    return resultAction;
  }, [dispatch]);

  useEffect(() => {
    void fetchAll();
  }, [fetchAll]);

  return (
    <>
      {loading && (
        <Flex alignItems="center" justifyContent="center" paddingY={4}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brand"
            size="xl"
          />
        </Flex>
      )}
      <Flex>
        <TableContainer w="100%">
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default Dashboard;
