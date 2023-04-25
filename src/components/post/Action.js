import { Flex, IconButton } from '@chakra-ui/react'
import {FaRegHeart,FaHeart,FaComment,FaRegComment, FaTrash} from "react-icons/fa"
import React from 'react'
import { useAuth } from 'hooks/auth';
import { useToggleLike ,useDeletePost} from 'hooks/posts';
import { Link } from 'react-router-dom';
import { PROTECTED } from 'lib/route';
import { useComments } from 'hooks/comments';


export default function Action({post}) {
    const {id,likes,uid} =post;
    const {user ,isLoading : userLoading}=useAuth();

    const isLiked = likes.includes(user?.id);
    const config ={
        id,
        isLiked,
        uid:user?.id,
    }

    const {toggleLike,isLoading : likeloading } = useToggleLike(config );
    const {deletePost,isLoading: deleteLoading} = useDeletePost(id);
    const { comments, isLoading: commentsLoading } = useComments(id);



  return (
    <Flex p="2">
        <Flex alignItems="center">
          <IconButton 
          onClick={toggleLike}
          isLoading={likeloading || userLoading }
          size="md" 
          colorScheme="red" 
          variant="ghost"
          icon={isLiked ?<FaHeart/> : <FaRegHeart />} 
          isRound
          />
          {likes.length}
        </Flex>
        <Flex alignItems="center" ml="2">
          <IconButton 
           as={Link}
           to={`${PROTECTED}/comments/${id}`}
          onClick={toggleLike}
          isLoading={commentsLoading }
          size="md" 
          colorScheme="teal" 
          variant="ghost"
          icon={comments?.length ===0 ? <FaRegComment /> : <FaComment />} 
          // icon={<FaRegComment /> } 
          isRound
          />
          {comments?.length}
         
        </Flex>
        { ! userLoading && user.id === uid &&<IconButton 
           onClick={deletePost}
           isLoading={ deleteLoading}
           ml="auto"
           size="md" 
          colorScheme="red" 
          variant="ghost"
          icon={<FaTrash /> } 
          isRound
          />}
    </Flex>
  )
}
