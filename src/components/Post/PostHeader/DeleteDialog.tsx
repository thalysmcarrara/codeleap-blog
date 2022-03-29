import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Text,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deletePostAction } from '../../../actions/Post.actions';
import {
  getIsCloseDeleteDialog,
  getIsDeleteLoading,
} from '../../../actions/selectors';

interface DeleteDialogProps {
  onClose: () => void;
  isOpen: boolean;
  postId: number;
}

export function DeleteDialog({ isOpen, onClose, postId }: DeleteDialogProps) {
  const cancelRef = useRef();
  const dispatch = useDispatch();
  const isDeleteLoading = useSelector(getIsDeleteLoading);
  const isCloseDeleteLoading = useSelector(getIsCloseDeleteDialog);

  const handleDelete = () => {
    dispatch(deletePostAction(postId));
  };

  useEffect(() => {
    if (isCloseDeleteLoading) {
      onClose();
    }
  }, [isCloseDeleteLoading]);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef.current}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent borderRadius="none" p="5">
          <AlertDialogBody>
            <Text fontSize="xl" lineHeight="7" as="span">
              Are you sure you want to delete this item?
            </Text>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              borderRadius="none"
              border="1px"
              bg="white"
              w="110px"
              h="33px"
              ref={cancelRef.current}
              onClick={onClose}
            >
              <Text fontWeight="normal" fontSize="xl" lineHeight="7" as="span">
                Cancel
              </Text>
            </Button>
            <Button
              isLoading={isDeleteLoading}
              borderRadius="none"
              border="1px"
              bg="white"
              w="110px"
              h="33px"
              onClick={handleDelete}
              ml={3}
            >
              <Text fontWeight="normal" fontSize="xl" lineHeight="7" as="span">
                OK
              </Text>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
