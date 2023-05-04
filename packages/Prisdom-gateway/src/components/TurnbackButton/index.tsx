import TextButton from '@prisdom/component-ui/buttons/TextButton';
import { ArrowLeftIconFilled } from '@prisdom/theme/icons/SVGs/arrow';
import { useRouter } from 'next/router';

interface TurnbackButtonProps {
  onClick?(): void;
}

const TurnbackButton = (props: TurnbackButtonProps) => {
  const router = useRouter();
  function _onClick() {
    router.back();
  }

  return (
    <TextButton
      variant={'secondary'}
      onClick={props.onClick || _onClick}
    >
      <ArrowLeftIconFilled boxSize="5" fill="inherit" mr="2" />
      Turn back
    </TextButton>
  );
};

export default TurnbackButton;
