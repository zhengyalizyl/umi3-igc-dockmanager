import { TradeModelState } from '@/pages/trade/tradeModelType';
import { Checkbox, Select, TreeSelect } from 'antd';
import React, { useState } from 'react';
import { connect } from 'umi';
import styles from './index.less';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const { Option } = Select;

const optionList = ['prod1', 'prod2'];

const SelectMutipDropDown = (props: any) => {
  const { dispatch } = props;
  const [selectState, setSelectState] = useState(true);
  const [checkedList, setCheckList] = useState<any[]>(optionList);

  const handleChange = (value: any, name: string) => {
    console.log(`selected ${value}`);

    dispatch({
      type: `trade/handleSelectDaily`,
      payload: {
        [name]: value,
      },
    });
  };

  const onChange = (e: any, id: string) => {
    // 判断 是否 选中
    if (id === 'all') {
      if (e.target.checked) {
        setCheckList([optionList]);
      } else {
        setCheckList([]);
      }
    } else {
      let arr = checkedList;
      if (e.target.checked) {
        arr.push(id);
      } else {
        arr = checkedList.filter((item) => item.id != item);
      }
      setCheckList(arr);
    }
  };

  const tagRender = (props: any) => {
    const { label, value } = props;
    console.log(value);
    let showName = '全部产品';
    if (value === 'all') {
      showName = '全部产品';
    } else {
    }

    return <span>{showName}</span>;
  };

  return (
    <Select
      dropdownClassName={styles.dropdownStyle}
      defaultValue={'all'}
      className={`${styles.selectBox}`}
      mode={'multiple'}
      tagRender={tagRender}
      onChange={(val) => handleChange(val, 'dialySelectProductData')}
      dropdownRender={(allSelectValue: any) => {
        return (
          <div>
            <div style={{ padding: '4px 8px 8px 8px', cursor: 'pointer' }}>
              <Checkbox
                checked={selectState}
                onChange={(e) => onChange(e, 'all')}
              >
                全部产品
              </Checkbox>
            </div>
            {optionList.map((item) => {
              return (
                <div style={{ padding: '4px 8px 8px 8px', cursor: 'pointer' }}>
                  <Checkbox
                    checked={selectState}
                    onChange={(e) => onChange(e, item)}
                  >
                    item
                  </Checkbox>
                </div>
              );
            })}

            {/* Option 标签值 */}
            {allSelectValue}
          </div>
        );
      }}
    ></Select>
  );
};

export default connect(({ trade }: { trade: TradeModelState }) => {
  return {
    dailyAlgoSelectRowData: trade.dailyAlgoSelectRowData,
  };
})(SelectMutipDropDown);
