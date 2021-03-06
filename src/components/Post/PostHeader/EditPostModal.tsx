import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveEditedPost } from '../../../actions/Post.actions';
import { getIsCloseModal, getIsEditLoading } from '../../../actions/selectors';

interface EditPostModalProps {
  onClose: () => void;
  isOpen: boolean;
  oldTitle: string;
  oldContent: string;
  postId: number;
}

export function EditPostModal({
  isOpen,
  onClose,
  oldContent,
  oldTitle,
  postId,
}: EditPostModalProps) {
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);
  const initialRef = useRef();
  const finalRef = useRef();

  const dispatch = useDispatch();
  const isCloseEditModal = useSelector(getIsCloseModal);
  const isEditLoading = useSelector(getIsEditLoading);

  useEffect(() => {
    if (isCloseEditModal) {
      onClose();
    }
  }, [isCloseEditModal]);

  const handleSave = () => {
    dispatch(saveEditedPost({ title, content, postId }));
  };

  return (
    <Modal
      initialFocusRef={initialRef.current}
      finalFocusRef={finalRef.current}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="none">
        <ModalHeader fontWeight="bold" fontSize="xl" lineHeight="7">
          Edit Post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl mb="5">
            <FormLabel
              fontSize="md"
              lineHeight="shorter"
              htmlFor="title-create"
              mb="6px"
            >
              Title
            </FormLabel>
            <Input
              fontSize="sm"
              value={title}
              id="title-create"
              type="text"
              border="1px"
              borderColor="gray.400"
              placeholder="Hello world"
              _placeholder={{
                color: 'gray.200',
              }}
              _hover={{
                border: '1px',
                borderColor: 'gray.400',
              }}
              onChange={({ target }) => setTitle(target.value)}
            />
          </FormControl>

          <FormControl mb="8">
            <FormLabel
              fontSize="md"
              lineHeight="shorter"
              mb="6px"
              htmlFor="content-create"
            >
              Content
            </FormLabel>
            <Textarea
              value={content}
              fontSize="sm"
              id="content-create"
              border="1px"
              borderColor="gray.400"
              placeholder="Here is a sample placeholder"
              _hover={{
                border: '1px',
                borderColor: 'gray.400',
              }}
              _placeholder={{
                color: 'gray.200',
              }}
              onChange={({ target }) => setContent(target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isEditLoading}
            onClick={handleSave}
            borderRadius="none"
            disabled={!(title && content)}
            type="submit"
            px="30px"
            py="7px"
            bg="black"
            color="white"
            _hover={{
              bg: title && content && 'green.400',
              color: title && content && 'black',
            }}
          >
            SAVE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
