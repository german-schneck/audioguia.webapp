// Dependencies
import React from 'react';
import { Description, Layout, Text } from './styles';

const Title = ({
  text,
  description = null
}) => (
  <Layout>
    <Text>
      {text}
    </Text>
    {description && <Description>{description}</Description>}
  </Layout>
);

export default Title;
