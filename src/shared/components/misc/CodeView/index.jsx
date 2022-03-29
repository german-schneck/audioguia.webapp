// Dependencies
import React, { useCallback, useState } from 'react';

// Styled Components
import {
  Layout,
  Code,
  Action,
  Actions
} from './styles';

// Assets
import {
  EyeOutline,
  EyeOffOutline,
  CopyOutline,
  CheckmarkOutline
} from 'react-ionicons';

function CodeView({ code }) {
  const [isVisible, setVisible] = useState(false);
  const [isCopied, setCopied] = useState(false);

  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  }, [code]);

  return (
    <Layout>
      <Code value={isVisible ? code : '******'} disabled />
      <Actions>
        <Action onClick={() => setVisible(!isVisible)}>
          {isVisible ? (
            <EyeOutline
              width={'18px'}
              height={'18px'}
              color={'#888888'}
            />
          ) : (
            <EyeOffOutline
              width={'18px'}
              height={'18px'}
              color={'#888888'}
            />
          )}
        </Action>

        <Action onClick={handleCopyCode} isGreen={isCopied}>
          {isCopied ? (
            <CheckmarkOutline
              width={'22px'}
              height={'22px'}
              color={'#fff'}
              />
          ) : (
            <CopyOutline
              width={'18px'}
              height={'18px'}
              color={'#888888'}
            />
          )}
        </Action>
      </Actions>
    </Layout>
  );
}

export default CodeView;
