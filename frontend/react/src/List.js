
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class List extends Component {
  render () {
    const { data } = this.props;
    console.log('data', { ...this.props.data });

    const columns = [{
      Header: 'Description',
      accessor: 'description_of_dog'
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
      <div>
        <h2>ALL DOGS</h2>
        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    );
  };
};

export default List;
