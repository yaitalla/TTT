import React from "react";
import PropTypes from "prop-types";
import { Table } from "baseui/table";
import { COLUMNS } from '../constants';


const DriversTable = ({ data }) => <Table columns={COLUMNS} data={data} />;

DriversTable.propTypes = {
  data: PropTypes.array
};

DriversTable.defaultProps = {
  data: undefined
};

export default DriversTable;
