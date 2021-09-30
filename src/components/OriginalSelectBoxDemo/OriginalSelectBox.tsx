/* eslint-disable react/require-default-props */
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { OriginalSelectBoxOptions } from 'components/OriginalSelectBoxDemo/OriginalSelectBoxOptions';

const useOutsideClick = ({
  ref,
  handleOnOutsideClicked,
}: {
  ref: RefObject<HTMLElement>;
  handleOnOutsideClicked: () => void;
}) => {
  const handleOnFocusOut = useCallback(
    (e: MouseEvent) => {
      if (e.target && ref.current && !ref.current.contains(e.target as Node)) {
        handleOnOutsideClicked();
      }
    },
    [ref, handleOnOutsideClicked],
  );

  useEffect(() => {
    const listener = (e: MouseEvent) => handleOnFocusOut(e);
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [handleOnFocusOut]);
};

type Props = {
  selectedKey: string;
  options: { key: string; label: string }[];
  handleOnSelectItem: (key: string) => void;
  maxHeight?: number;
};

export const OriginalSelectBox = ({ selectedKey, options, handleOnSelectItem, maxHeight }: Props): JSX.Element => {
  const [listOpened, setListOpened] = useState(false);
  const selectBoxRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: selectBoxRef, handleOnOutsideClicked: () => setListOpened(false) });

  const displayedLabel = options.find((s) => s.key === selectedKey)?.label || selectedKey;

  return (
    <Flex
      ref={selectBoxRef}
      rounded="md"
      border="solid 1px"
      bg="gray.200"
      h="40px"
      justify="center"
      align="center"
      position="relative"
      onClick={() => setListOpened(!listOpened)}
    >
      {displayedLabel}
      {listOpened && selectBoxRef.current && (
        <OriginalSelectBoxOptions
          selectBoxElement={selectBoxRef.current}
          options={options}
          handleOnSelectItem={handleOnSelectItem}
          maxHeight={maxHeight}
        />
      )}
    </Flex>
  );
};
