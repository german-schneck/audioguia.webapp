// Dependencies
import styled from 'styled-components';

/**
 * Makes a conditional render of styles, this function is implemented to prevent renderings "undefined" within the CSS and to make the reading more comfortable.
 * @param cond Operation or conditional.
 * @param primaryQuery code to render within the operation logic. It acts as the first value when a elseif is detected.
 * @param secondaryQuery secondary code, optional and applicable as a else-if. Render CSS.
 * @returns {string} One or the other query depending on the conditional we assign.
 */
export const styledIf = (cond, primaryQuery, secondaryQuery = null) => {
  return !secondaryQuery ? cond ? primaryQuery : '' : cond ? primaryQuery : secondaryQuery;
};

// Mobile
export const isMobile = query => {
  return `@media screen and (min-width: 0px) and (max-width: 990px) { ${query} }`;
};

export const isTablet = query => {
  return `@media screen and (min-width: 991px) and (max-width: 1100px) { ${query} }`;
};

export const media = (size, query) => {
  return `@media screen and (min-width: ${size}px) { ${query} }`;
};

export const isNotMobile = query => {
  return `@media screen and (min-width: 990px) { ${query} }`;
};

export const MarginContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
