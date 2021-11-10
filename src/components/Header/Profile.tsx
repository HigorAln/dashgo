import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData=true}: ProfileProps){
  return(
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign="right">
          <Text>Higor Alan</Text>
          <Text color='gray.300' fontSize="small">
            higor.allan21@gmail.com
          </Text>
        </Box>
      )}
      

      <Avatar size='md' name="Higor Allan" src="https://github.com/higoraln.png"/>
    </Flex>
  )
}