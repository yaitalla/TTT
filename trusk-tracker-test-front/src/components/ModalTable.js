import React from 'react';
import {useStyletron} from 'baseui';

const ModalTable = ({ data }) => {
    const [css] = useStyletron();
    return (
        <div className={css({height: '450px', border: '1px solid silver', borderRadius: '15px'})}>
            { data ?
                Object.keys(data).map((item, i) =>{
                    return (
                        <p key={i}>{item}: {data[item]}</p>
                    )
                }) : null
            }
        </div>
    )
}

export default ModalTable;