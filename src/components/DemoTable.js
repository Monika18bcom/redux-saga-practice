import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFilters, useRowSelect, useSortBy, useTable} from "react-table/dist/react-table.production.min";
import {gqlUserDataAction} from "../redux/action";


function DemoTable(props) {

    const userD = useSelector((state) => state.userDataReducer)
    const dispatch = useDispatch()

    console.log(userD)

    useEffect(() => {
        // dispatch(userDataAction())
        dispatch(gqlUserDataAction())
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'User Name',
                accessor: 'name',
            },
            {
                Header: 'Email Id',
                accessor: 'email',
            },
            {
                Header: 'Email Id 2',
                accessor: 'username',
            },
            {
                Header: 'User Type',
                accessor: 'roles[0].role',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
        ],
        []
    )

    const data = useMemo(() => userD, [userD])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data}, useRowSelect, useFilters, useSortBy)
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);

                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {

                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default DemoTable;