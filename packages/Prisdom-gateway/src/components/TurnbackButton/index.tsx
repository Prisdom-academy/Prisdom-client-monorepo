import TextButton from '@prisdom/component-ui/buttons/TextButton';
import { ArrowLeftIconFilled } from '@prisdom/theme/icons/SVGs/arrow';

interface TurnbackButtonProps {
  onClick?(): void;
}

const TurnbackButton = (props: TurnbackButtonProps) => {
  return (
    <TextButton variant={'secondary'} onClick={props.onClick}>
      <ArrowLeftIconFilled boxSize="5" fill="inherit" mr="2" />
      Turn back
    </TextButton>
  );
};

export default TurnbackButton;
