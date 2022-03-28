import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Text,
} from '@chakra-ui/react';
import { useRef } from 'react';

interface DeleteDialogProps {
  onClose: () => void;
  isOpen: boolean;
}

export function DeleteDialog({ isOpen, onClose }: DeleteDialogProps) {
  const cancelRef = useRef();
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
              borderRadius="none"
              border="1px"
              bg="white"
              w="110px"
              h="33px"
              onClick={onClose}
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
