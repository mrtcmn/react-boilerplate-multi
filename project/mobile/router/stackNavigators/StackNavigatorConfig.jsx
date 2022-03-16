import React from 'react';

export const StackNavigatorItem = ({
  Stack,
  key,
  component,
  title,
  ...props
}) => {
  return (
    <Stack.Screen
      name={key}
      component={component}
      key={key}
      options={{
        title,
      }}
      {...props}
    />
  );
};
