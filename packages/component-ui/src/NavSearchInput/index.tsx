import {
  Box,
  BoxProps,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { SearchNormalIconOutlined } from '@prisdom/theme/icons/SVGs/searchNormal';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import SearchResult from './SearchResult';
import { styles } from './style';
import HotKeys from 'react-hot-keys';
import { TypoToken } from '@prisdom/theme/base/interfaces';

const DELAY_SEARCH_TIME = 2000; // 2 seconds

export interface CourseModel {
  imgUrl: string;
  title: string;
  timeByHour: number;
}

export interface RecentDataModel {
  title: string;
  timeByMinutes: number;
  url: string;
  type: any;
}
export interface INavSearchInputProps extends BoxProps {
  recentData: RecentDataModel[];
  courseData: CourseModel[];
}

const NavSearchInput = (props: INavSearchInputProps) => {
  const { recentData, courseData, ...rest } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSearching, setIsSearching] = useState(false);
  const [val, setVal] = useState('');
  const _searchInputRef = useRef<HTMLInputElement>(null);

  const _renderShortcutIcon = () => {
    return (
      <Flex sx={styles.shortcut}>
        <Text
          layerStyle={TextLayer.smallBoldNormal2X}
          color={NavTokenColor.cpn_shortcut_content}
        >
          Ctrl + /
        </Text>
      </Flex>
    );
  };

  // eslint-disable-next-line no-undef
  let timeoutId: NodeJS.Timeout | null = null;
  const _onLazyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const searchContent = _searchInputRef.current?.value;
    if (searchContent) {
      timeoutId = setTimeout(() => {
        // start searching
        setIsSearching(true);
      }, DELAY_SEARCH_TIME);
    } else {
      setIsSearching(false);
    }
  };

  const _onShortcut = () => {
    _searchInputRef.current?.focus();
  };

  const _clickOutside = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <HotKeys keyName="ctrl+/" onKeyDown={_onShortcut}>
      <Box position={'relative'} {...rest}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <SearchNormalIconOutlined
                fill={
                  val
                    ? TypoToken.type_neutral_default
                    : TypoToken.type_placeholder
                }
              />
            }
          />
          <Input
            focusBorderColor={ExtendedColor['primary_dark.500']}
            placeholder="Search"
            sx={styles.input}
            ref={_searchInputRef}
            onChange={(e) => _onLazyChange(e)}
            onFocus={() => onOpen()}
            onClick={() => onOpen()}
            value={val}
          />
          <InputRightElement
            w="70px"
            pointerEvents="none"
            children={_renderShortcutIcon()}
          />
        </InputGroup>
        <SearchResult
          courseData={courseData}
          recentData={recentData}
          isShow={isOpen}
          inputRef={_searchInputRef}
          isSearching={isSearching}
          onClickOutside={_clickOutside}
        />
      </Box>
    </HotKeys>
  );
};

export default NavSearchInput;
