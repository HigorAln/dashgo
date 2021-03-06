import { Stack, Icon} from '@chakra-ui/react'
import { RiNotification2Line, RiUserAddLine } from 'react-icons/ri';

export function NotificationsNav(){
  return(
    <Stack 
      spacing={["4", "3"]} 
      direction="row"
      mx={["8", "6"]} 
      pr={["8", "6"]} 
      py='1'
      color='gray.300'
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotification2Line} fontSize="20"/>
      <Icon as={RiUserAddLine} fontSize="20"/>
    </Stack>
  );
}