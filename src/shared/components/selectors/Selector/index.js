// Dependencies
import React, { useCallback, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

// Assets
import { ChevronDownOutline } from 'react-ionicons';

// Styled Components
import {
  Layout,
  Label,
  SelectorView,
  ItemSelected,
  List,
  Item,
  Value,
  Arrow
} from './styles';

function Selector({
  label,
  name,
  options = []
}) {
  const menuRef = useRef(null);

  // State
  const [isExpanded, setExpanded] = useState(false);

  const handleMenuClick = useCallback(() => {
    if (options.length) {
      setExpanded(!isExpanded);
    }
  }, [isExpanded, options]);

  useClickAway(menuRef, () => {
    if (isExpanded) {
      setExpanded(false);
    }
  });

  return (
    <Layout>
      <Label for={name}>{label}</Label>
      <SelectorView ref={menuRef}>
        <ItemSelected onClick={handleMenuClick}>
          <Value>Audioguia Alhambra</Value>
          {!!(options.length) && (
            <Arrow>
              <ChevronDownOutline />
            </Arrow>
          )}
        </ItemSelected>
        {isExpanded && (
          <List>
            {options.map((option, index) => (
              <Item key={`--option-menu-${index.toString()}`}>
                {option.label}
              </Item>
            ))}
          </List>
        )}
      </SelectorView>
    </Layout>
  );
}

export default Selector;
