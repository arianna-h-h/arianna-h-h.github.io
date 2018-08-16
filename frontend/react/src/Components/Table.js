import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Table extends Component {
  render () {
    const { data } = this.props;

    const columns = [{
      Header: 'Description',
      accessor: 'description_of_dog',
      minWidth: 200
    }, {
      Header: 'Address',
      accessor: 'address'
    }, {
      Header: 'Zip Code',
      accessor: 'zip_code'
    }, {
      Header: 'Owner First Name',
      accessor: 'first_name'
    }, {
      Header: 'Owner Last Name',
      accessor: 'last_name'
    }];

    return (
      <div className='table-wrapper'>
        <div className='table-header'>
          <h2>Dangerous Dogs in the Austin Area</h2>
          <div>Click column headers to filter table</div>
        </div>
        <ReactTable
          className='-highlight table-content'
          data={data}
          columns={columns}
        />
      </div>
    );
  };
};

export default Table;
