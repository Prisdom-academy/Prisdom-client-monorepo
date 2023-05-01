import SafeContainer, {
  ISafeContainer
} from '@prisdom/component-ui/src/SafeContainer';

export const NextSafeContainer = (props: ISafeContainer) => {
  const { ...rest } = props;

  return (
    <SafeContainer mt="0" pt="5rem" {...rest}>
      {props.children}
    </SafeContainer>
  );
};
