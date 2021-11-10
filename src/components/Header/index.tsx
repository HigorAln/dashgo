import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox';
import { useSideBarDrawer } from '../../context/SideBarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header(){
  const isWideVersion = useBreakpointValue({ base: false, lg: true})
  const { onOpen } = useSideBarDrawer()

  return(
   <Flex w="100%" as='header' maxW={1480} h="20" mx="auto" mt="4" px="6" align="center">
     { !isWideVersion && (
       <IconButton
        aria-label="Open Navigation"
        icon={<Icon as={RiMenuLine} />}
        fontSize="24"
        variant="unstyled"
        onClick={onOpen}
        mr='2'
       >

       </IconButton>
     )}

      <Logo/>
      
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  )
}