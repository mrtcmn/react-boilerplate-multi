import React from 'react';

export const DrawerNavigatorItem = ({
  Drawer,
  key,
  component,
  title,
  ...props
}) => {
  return (
    <Drawer.Screen
      name={key}
      component={component}
      key={key}
      options={{ drawerLabel: title }}
      {...props}
    />
  );
};
