import { Link } from 'react-router-dom'
import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { PROTECTED } from 'lib/route';

export default function Avatar({ user, size = "xl",overrideAvatar=null }) {
  if (!user) return "No Profile";
  return (
    <ChakraAvatar
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
      name={user?.username}
      size={size}
      src={overrideAvatar || user?.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  )
}
