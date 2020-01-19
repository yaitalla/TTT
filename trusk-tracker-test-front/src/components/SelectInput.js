import React, { useContext } from "react";
import  {Context} from '../reducer';
import { Select, SIZE } from "baseui/select";
import {ALL_DRIVERS} from '../reducer';

const DriverFilter = () => {
    const {store, dispatch} = useContext(Context)
    const selectDriver = (params) => {
        dispatch({type: "FILTER", filter: params.value[0]})
    }
    return (
        <>
            <Select
                size={SIZE.large}
                placeholder="Select driver"
                searchable={false}
                options={[
                    { label: ALL_DRIVERS, id: "#F0F8FF" },
                    { label: "driver1", id: "#FAEBD7" },
                    { label: "driver2", id: "#00FFFF" },
                    { label: "driver3", id: "#7FFFD4" },
                    { label: "driver4", id: "#F0FFFF" },
                    { label: "driver5", id: "#F5F5DC" }
                  ]}
                value={store.filter}
                onChange={selectDriver}
            />
        </>
    )
}

export default DriverFilter;