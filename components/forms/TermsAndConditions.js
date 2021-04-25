import { Text } from "@chakra-ui/layout";
import { ModalContent } from "@chakra-ui/modal";
import { ModalCloseButton } from "@chakra-ui/modal";
import { ModalFooter } from "@chakra-ui/modal";
import { ModalBody } from "@chakra-ui/modal";
import { ModalHeader } from "@chakra-ui/modal";
import { ModalOverlay } from "@chakra-ui/modal";
import { Modal } from "@chakra-ui/modal";
import React from "react";
import Button from "../inputs/Button";

export default function TermsAndConditions({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Term and Conditions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed porttitor massa, eget fringilla lorem. Aenean sit amet magna vel
            erat convallis scelerisque dictum vel nunc. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Cras tellus ipsum, blandit
            non dui sit amet, auctor congue nulla. Integer hendrerit dictum
            risus. Ut imperdiet a purus nec varius. Morbi laoreet facilisis
            orci, ut rhoncus mi dapibus ac. Donec vitae erat eu orci eleifend
            feugiat malesuada et metus.
          </Text>
          <Text mb="12px">
            Quisque aliquam blandit elit, quis lobortis libero maximus eget.
            Proin accumsan in ante nec rhoncus. In hac habitasse platea
            dictumst. Duis quam turpis, laoreet vitae sapien nec, pretium
            feugiat lectus. Aliquam accumsan non felis vitae aliquam. Aliquam
            non feugiat dolor. Ut molestie augue purus, nec ornare est posuere
            eu. Nullam sit amet lorem facilisis, blandit lacus ac, blandit odio.
            Curabitur ut rutrum est.
          </Text>
          <Text mb="12px">
            Etiam a urna quis felis pellentesque lobortis nec vitae nisl. Morbi
            tempus id nisi non euismod. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse venenatis, odio id vestibulum iaculis,
            mi felis aliquam nibh, eget finibus augue eros ullamcorper ligula.
            Cras a blandit eros, non elementum odio. Morbi ut urna at mauris
            sodales feugiat vitae nec ex. Duis sodales vel massa a dictum. Cras
            non dolor arcu. Etiam arcu odio, dictum ut sem sed, fringilla
            placerat metus. Nam at lectus velit. Nam sed lorem vitae turpis
            tincidunt molestie vel et enim.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
