// Dependencies
import styled from 'styled-components';

export const Table = styled.table`
  border-spacing: 0;
  overflow: hidden;
  width: 100%;
  border-radius: 4px;

  background: #ffffff;
  box-shadow: 0 0 17px 4px #e5e5e5;

  thead {
    border: none;
    background: #d5d5d5;

    th {
      color: #525252;
      padding: 12px 22px;
    }
  }

  tbody {
    td {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0;
      text-align: center;
      color: #363636;
      padding: 12px 22px;
      white-space: nowrap;
    }
  }

  th,
  td {
    margin: 0;
    border: 0;

    :last-child {
      border-right: 0;
    }
  }

  thead {
    user-select: none;

    th {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      white-space: nowrap;
    }
  }

  tr {

    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
`;
