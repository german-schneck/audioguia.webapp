// Dependencies
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useHistory } from 'react-router-dom';

// Styled Components
import { Field, Grid, Row } from '../../styles';
import { Table } from './styles';

// Components
import Button from '../../../../shared/components/buttons/Button';
import TextInput from '../../../../shared/components/inputs/TextInput';
import CodeView from '../../../../shared/components/misc/CodeView';

function AccountsList() {
  const history = useHistory();

  const columns = useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name'
      },
      {
        Header: 'Apellido',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Código',
        accessor: 'code'
      },
      {
        Header: 'Fecha de creación',
        accessor: 'createdAt'
      }
    ],
    []
  );

  const data = useMemo(() => [
    {
      name: 'German',
      lastName: 'Debonis',
      email: 'german.schneck@gmail.com',
      code: (
        <CodeView
          code={'3B522D'}
        />
      ),
      createdAt: format(new Date(), 'PPP / p', {
        locale: es
      })
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <div>
      <Field>
        <Grid>
          <Row>
            <Button
              caption={'Crear membresía'}
              onClick={() => history.push('/apps/1/sales/create-accounts')}
            />
          </Row>
          <Row>
            <TextInput
              label={'Dirección de correo electrónico'}
              placeholder={'Escribe y presiona ENTER para buscar.'}
            />
          </Row>
        </Grid>
      </Field>
      <Field>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, headerIndex) => (
              <tr
                key={`--row-${headerIndex.toString()}`}
                {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, headerGroupIndex) => (
                  <th
                    key={`--row-group-${headerGroupIndex.toString()}`}
                    {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={`--arrow-key-${i.toString()}`} {...row.getRowProps()}>
                  {row.cells.map((cell, cellId) => {
                    return (
                      <td key={`--key-cell-id-${cellId.toString()}`} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Field>
    </div>
  );
}

export default AccountsList;
