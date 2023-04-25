import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";
import { DASHBOARD, LOGIN } from "lib/route";
import { Link as RouterLink } from "react-router-dom";
import {useRegister} from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate,passwordValidate,usernameValidate } from "util/form-validate";

export default function Register() {
 const {register :signup , isLoading} = useRegister();
 const {
  register,
  handleSubmit,
  // reset,
  formState:{errors},
  }= useForm();




 async function handlRegister(data){
   signup({
    username:data.username,
    email:data.email,
    password:data.password,
    redirectTo:DASHBOARD
   });

 }


  return <Center w='100%' h='100vh'>
    <Box mx="1" 
    maxW="md" 
    p='9' 
    borderWidth='1px' 
    borderRadius='lg'>
      <Heading mb='4' size='lg' textAlign='center'>Register </Heading>

      <form onSubmit={handleSubmit(handlRegister)}>
        <FormControl isInvalid={errors.username} py="2">
          <FormLabel>
            Username
          </FormLabel>
          <Input placeholder="username" 
          {...register('username',usernameValidate)} 
          />
          <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email} py="2">
          <FormLabel>
            Email
          </FormLabel>
          <Input type="email" placeholder="user@gmail.com" 
          {...register('email',emailValidate)} 
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} py="2">
          <FormLabel>
            Password
          </FormLabel>
          <Input type="password" placeholder="password123"
           {...register('password', passwordValidate)}
            />
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>
        <Button mt="4" 
        type="Submit" 
        colorScheme="teal" 
        size="md" w="full" 
        isLoading={isLoading} 
        loadingText="Signing up..">
          Register
        </Button>

      </form>
      <Text fontSize="sm " align="center" mt="6">
        Already have account ?{""}
        <Link as={RouterLink}
          to={LOGIN}
          color="teal.800"
          fontWeight="medium"
          textDecor="underline"
          _hover={{ background: "teal.100" }}>Log In
        </Link>{" "}
        Instead!
      </Text>
    </Box>
  </Center>
}