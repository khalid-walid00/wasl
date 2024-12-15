import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@nextui-org/react";
  import { ReactNode } from "react";
  
  type ModalSize = "2xl" | "md" | "xs" | "sm" | "lg" | "xl" | "3xl" | "4xl" | "5xl" | "full" | undefined;
  
  type CustomModalProps = {
    children: ReactNode; 
    title: string;
    isOpen: boolean; 
    onOpenChange: (open: boolean) => void; 
    size?: ModalSize;
  };
  
  export default function CustomModal({
    children,
    title,
    size = "md",
    isOpen,
    onOpenChange,
  }: CustomModalProps) {
    const handleAction = () => {
      onOpenChange(false);
    };
  
    const handleClose = () => {
      onOpenChange(false);
    };
  
    return (
      <>
        <Modal size={size} classNames={
          {
            backdrop: 'z-[999]',
            wrapper:"z-[10000]"
          }
        } className="z-[99999]" isOpen={isOpen} onOpenChange={onOpenChange} closeButton>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={handleAction}>
                  Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  