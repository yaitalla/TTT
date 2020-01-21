import React from "react";
import PropTypes from "prop-types";
import { StyledCell, StyledTable, Table } from "baseui/table";
import {withStyle, useStyletron} from 'baseui';

const COLUMNS = ["#ID", "Latitude", "Longitude"];

const DriversTable = ({ data }) => <Table columns={COLUMNS} data={data} />;

DriversTable.propTypes = {
  data: PropTypes.array
};

DriversTable.defaultProps = {
  data: undefined
};

export default DriversTable;
