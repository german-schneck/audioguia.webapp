// Dependencies
import React, { useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Styled Components
import { Layout, Field, Grid, Row } from '../styles';
import { Table } from './styles';
import { MarginContainer } from '../../../shared/components';

// Components
import Title from '../../../shared/components/misc/Title';
import Button from '../../../shared/components/buttons/Button';
import TextInput from '../../../shared/components/inputs/TextInput';
import CodeView from '../../../shared/components/misc/CodeView';

// Actions
import { fetchAppInvitation } from '../../../redux/flows/apps/actions';

// Selectors
import { getIsLoadingApps, getMyInvitations } from '../../../redux/flows/apps/selectors';

function InvitationsScreen() {
  // Hooks
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoadingApps = useSelector(getIsLoadingApps);
  const invitationsList = useSelector((state) => getMyInvitations(state, params.id));

  useEffect(() => {
    dispatch(fetchAppInvitation(params.id));
  }, []);

  const columns = useMemo(
    () => [
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

  const data = useMemo(() => invitationsList.map((invitation) => (
    {
      email: invitation.toEmail,
      code: (
        <CodeView
          code={invitation.code}
        />
      ),
      createdAt: format(new Date(invitation.createdAt), 'PPP / p', {
        locale: es
      })
    }
  )), [invitationsList]);

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

  if (isLoadingApps) {
    return null;
  }

  return (
    <Layout>
      <MarginContainer>
        <Field>
          <Title
            text={'Herramienta de ventas'}
            description={'Gestiona tus ventas desde aqui. Podrás crear hasta una cierta cantidad asignada de códigos de acceso a la app'}
          />
        </Field>
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
      </MarginContainer>
    </Layout>
  );
}

export default InvitationsScreen;
