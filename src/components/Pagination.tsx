import { Box, HStack, IconButton } from '@chakra-ui/react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { getPostsAction } from '../actions/Post.actions';
import { getNextLink, getPreviousLink } from '../actions/selectors';

export function Pagination() {
  const next = useSelector(getNextLink);
  const previous = useSelector(getPreviousLink);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(getPostsAction(next || undefined));
  };

  const handlePrevious = () => {
    dispatch(getPostsAction(previous || undefined));
  };

  return (
    <HStack w="100%" mb="7" justifyContent="center">
      <Box>
        <IconButton
          onClick={handlePrevious}
          disabled={!previous}
          bg="black"
          size="lg"
          aria-label="navigate previous posts"
          icon={<MdArrowBack color="white" size="35" />}
          borderBottomLeftRadius={10}
          borderTopLeftRadius={10}
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
        />
        <IconButton
          onClick={handleNext}
          disabled={!next}
          bg="black"
          size="lg"
          aria-label="navigate next posts"
          icon={<MdArrowForward color="white" size="35" />}
          ml="2"
          borderBottomLeftRadius={0}
          borderTopLeftRadius={0}
          borderBottomRightRadius={10}
          borderTopRightRadius={10}
        />
      </Box>
    </HStack>
  );
}
