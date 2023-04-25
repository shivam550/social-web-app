import { Button } from "@chakra-ui/react";
import { PROTECTED } from "lib/route";
import { Link } from "react-router-dom";

export default function UsernameButton({user}) {
  // const {user} = props
  return (
    <Button
      as={Link}
      to={`${PROTECTED}/profile/${user?.id}`}
      colorScheme="teal"
      variant="link"
    >
      {user?.username}
    </Button>
  );
}
