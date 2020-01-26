import React, { useContext, useCallback } from "react";
import  {Context} from '../reducer';
import { Select, SIZE } from "baseui/select";

const DriverFilter = () => {
    const {store, dispatch} = useContext(Context)
    const selectDriver = useCallback((params) => {
        dispatch({type: "FILTER", filter: params.value[0]})
    }, [dispatch])
    return (
        <>
            <Select
                clearable={false}
                size={SIZE.large}
                searchable={false}
                options={[
                    { label: "All drivers", id: "#F0F8FF" },
                    { label: "driver1", id: "pink" },
                    { label: "driver2", id: "#00FFFF" },
                    { label: "driver3", id: "#7FFFD4" },
                    { label: "driver4", id: "#F0FFFF" },
                    { label: "driver5", id: "#F5F5DC" }
                  ]}
                value={[store.filter]}
                onChange={selectDriver}
            />
        </>
    )
}

export default DriverFilter;