import {
  Button,
  ButtonProps,
  Collapse,
  ComponentWithAs,
  IconProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Children, Fragment, useState } from "react";
import { ArrowRightIconOutlined } from "@prisdom/theme/icons/SVGs/arrow";
import { TextLayer } from "@prisdom/theme/typography/interfaces";
import { styleGen } from "./styles";

interface ICollapsibleNavigationProps extends ButtonProps {
  IconCollapsed: ComponentWithAs<"svg", IconProps>;
  IconExpanded: ComponentWithAs<"svg", IconProps>;
  title: string;
  isMinimize?: boolean;
}

const CollapsibleNavigation = (props: ICollapsibleNavigationProps) => {
  const {
    children,
    IconCollapsed,
    IconExpanded,
    title,
    isMinimize = false,
    ...rest
  } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  let isActiveThisNav = false;
  Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const { isActive } = child.props;
      if (isActive) {
        isActiveThisNav = true;
      }
    } else {
      throw Error("Please using <CollapsibleNavItem /> here");
    }
  });

  const styles = styleGen(isActiveThisNav, isCollapsed, isMinimize);

  function _renderTextAndArrow() {
    return (
      <Fragment>
        <Text
          as="h3"
          mr="auto !important"
          color="inherit"
          layerStyle={
            isCollapsed ? TextLayer.baseRegularNormal : TextLayer.baseBoldNormal
          }
        >
          {title}
        </Text>
        <ArrowRightIconOutlined sx={styles.arrow} ml="0" />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Button
        sx={styles.root}
        data-testid="Collapsible_nav_btn"
        onClick={() => setIsCollapsed(!isCollapsed)}
        isActive={isActiveThisNav}
        {...rest}
      >
        {isCollapsed ? (
          <IconCollapsed sx={styles.icon} />
        ) : (
          <IconExpanded sx={styles.icon} />
        )}
        {!isMinimize && _renderTextAndArrow()}
      </Button>
      <Collapse in={!isCollapsed && !isMinimize} animateOpacity>
        <VStack data-testid="Collapsible_nav_item" m=".4rem 0 1rem .5rem">
          {children}
        </VStack>
      </Collapse>
    </Fragment>
  );
};

export default CollapsibleNavigation;
