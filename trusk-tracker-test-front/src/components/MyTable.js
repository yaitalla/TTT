import React, { useContext, useCallback } from 'react';
import { StyledCell, StyledTable, StyledHead,
    StyledHeadCell, StyledBody, StyledRow } from "baseui/table";
import {withStyle, useStyletron} from 'baseui';
import SocketContext from '../sockets/context';
import { Paragraph3 } from 'baseui/typography';
import {Block} from 'baseui/block';
import { Context } from '../reducer';
import { FILTER } from '../constants';


const SelectedCell = withStyle(StyledCell, props => ({
    ...props.$theme.typography.font350,
    alignItems: 'center',
    backgroundColor: props.$theme.colors.positive50,
    color: props.$theme.colors.positive,
  }));

  const DriverCell = withStyle(StyledCell, props => ({
    ...props.$theme.typography.font400,
    alignItems: 'center',
  }));

const MyTable = () => {
    const [css] = useStyletron();
    const {store, dispatch} = useContext(Context)
    const { loc } = useContext(SocketContext);
    const clicked = useCallback((driver) => {
        dispatch({type: FILTER, filter: {label: driver, id: ""}})
    }, [dispatch])
    return (
            <div className={css({height: '260px'})}>
                <StyledTable>
                    <StyledHead >
                        <StyledHeadCell>#ID</StyledHeadCell>
                        <StyledHeadCell>Latitude</StyledHeadCell>
                        <StyledHeadCell>Longitude</StyledHeadCell>
                    </StyledHead>
                    <StyledBody>
                    {
                        loc ?
                        loc.map((row, index) => (
                            store.filter.label === row[0] ?
                            <StyledRow  key={index}>
                                <SelectedCell
                                
                                >{row[0]}</SelectedCell>
                                <SelectedCell>
                                    <React.Fragment>
                                    {row[1]}
                                    </React.Fragment>
                                </SelectedCell>
                                <SelectedCell >
                                    <React.Fragment>
                                    {row[2]}
                                    </React.Fragment>
                                </SelectedCell>
                            </StyledRow>
                            :
                            <StyledRow onClick={() => clicked(row[0])} className={"hoverable"} key={index}>
                                <DriverCell>{row[0]}</DriverCell>
                                <StyledCell>
                                    <Block>
                                    <Paragraph3 as="div">{row[1]}</Paragraph3>
                                    </Block>
                                </StyledCell>
                                <StyledCell >
                                    <React.Fragment>
                                    {row[2]}
                                    </React.Fragment>
                                </StyledCell>
                            </StyledRow>
          )) : null}
                    </StyledBody>
                </StyledTable>
            </div>
        )
  }
  

  export default MyTable;