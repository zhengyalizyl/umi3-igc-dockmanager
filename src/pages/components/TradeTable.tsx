import React, { useRef, useEffect } from 'react';
import { getData } from './data';

import {
    IgrDataGrid,
    IgrDataGridModule,
    IgrImageColumn,
    IgrTextColumn,
    IgrNumericColumn,
    IgrDateTimeColumn,
    IgrColumnGroupDescription,
    IgrGridColumnOptionsModule
} from 'igniteui-react-grids'

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();
const TradeTable = () => {
    const onGrideRef = useRef<any>();

    useEffect(() => {
        const state = new IgrColumnGroupDescription();
        state.field = "Status";
        state.displayName = "Status";
        onGrideRef.current.useAccessibility =true;//键盘导航
        // onGrideRef.current.groupDescriptions.add(state);

    }, [])

    return (
        <div className='container'>
            <IgrDataGrid
                ref={onGrideRef}
                height="100%"
                width="100%"
                autoGenerateColumns="false"
                isColumnOptionsEnabled="true"
                dataSource={getData()}
            >
                <IgrTextColumn pinned="left" field='ProductID' headerText='商品ID' width="*>110" horizontalAlignment="center" />
                <IgrImageColumn field="CountryFlag" headerText="Country" width="*>130"
                    contentOpacity="1" horizontalAlignment="center" paddingTop="5" paddingBottom="5" />
                <IgrNumericColumn field="ProductPrice" headerText="Price" width="*>110"
                    positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2} />
                <IgrNumericColumn field="OrderItems" headerText="Orders" width="*>140" />
                <IgrNumericColumn field="OrderValue" headerText="Order Value" width="*>160"
                    positivePrefix="$" showGroupingSeparator="true" />
                <IgrNumericColumn field="Profit" headerText="Profit" width="*>140"
                    positivePrefix="$" showGroupingSeparator="true" />
                <IgrTextColumn field="Status" headerText="Status" width="*>140"
                    horizontalAlignment="center" />
            </IgrDataGrid>

        </div>
    )
}

export default TradeTable