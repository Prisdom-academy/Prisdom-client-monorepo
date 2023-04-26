import SafeContainer, {
  ISafeContainer
} from '@prisdom/component-ui/src/SafeContainer';

export const NextSafeContainer = (props: ISafeContainer) => {
  return <SafeContainer pt="5rem">{props.children}</SafeContainer>;
};
