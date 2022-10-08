import React, { useRef, useEffect } from "react";
import styles from "./index.less";
import "./DockManagerStyle.less";
import "igniteui-webcomponents/themes/dark/material.css"
//  import 'igniteui-dockmanager/dist/collection/styles/igc.themes';
import { configureTheme } from "igniteui-webcomponents";
import { IgcDockManagerComponent, IgcContentPane } from "igniteui-dockmanager";
import {
  IgcDockManagerPaneType,
  IgcSplitPaneOrientation
} from "igniteui-dockmanager";
import { defineCustomElements } from "igniteui-dockmanager/loader";
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import TradeTable from './components/TradeTable';
import DayTable from "./components/DayTable";
import OrderContent from "./components/OrderContent";
import AlarmReminder from "./trade/components/alarmReminder";
import AbandonedOrderReminder from './trade/components/abandonedOrderReminder/index';


/* eslint-disable */
declare global {
  namespace JSX {
    // tslint:disable-next-line:interface-name
    interface IntrinsicElements {
      "igc-dockmanager": any;
    }
  }
}
/* eslint-enable */

defineCustomElements();

configureTheme("bootstrap");
const DockManagerOverview = () => {
  const dockManagerRef = useRef<IgcDockManagerComponent | null>(null);
  useEffect(() => {
    const pane1 = createContentPane("content1", "日内增强");
    const pane2 = createContentPane("content2", "订单执行");
    const pane3 = createContentPane('content3', '告警提示');
    const pane4 = createContentPane('content4', '废单提示');
    const pane5 = createContentPane("content5", "订单");
    const pane6 = createContentPane('content6', '日内执行算法')
    // pane5.allowFloating=false;//不允许移动
    // pane5.allowDocking=false;
    // pane6.allowFloating=false;//不允许移动
    // pane6.allowDocking=false;


    //pane1和pane2组成一个
    const tabpane1 = createTabPane(IgcSplitPaneOrientation.horizontal, [pane1, pane2], 200);

    const tabpane2 = createTabPane(IgcSplitPaneOrientation.horizontal, [pane3, pane4], 300);

    const tabPane3 = createTabPane(IgcSplitPaneOrientation.horizontal, [pane5, pane6], 400)
    const splitPane1 = createSplitPane(IgcSplitPaneOrientation.horizontal, [tabpane1, tabpane2], 300)
    const splitPane2 = createSplitPane(
      IgcSplitPaneOrientation.vertical,
      [tabPane3],
      400
    );


    //  const splitPane3=createSplitPane(
    //    IgcSplitPaneOrientation.vertical,
    //    [pane7],
    //    400
    //  )


    // 'paneDragStart': CustomEvent<IgcPaneDragStartEventArgs>;
    /**
     * An event raised when a pane is dragged over.
     */
    // 'paneDragOver': CustomEvent<IgcPaneDragOverEventArgs>;
    /**
     * An event raised when a pane drag ends.
     */
    // 'paneDragEnd': CustomEvent<IgcPaneDragEndEventArgs>;
    // (dockManagerRef.current as IgcDockManagerComponent).addEventListener('paneDragOver',ev=>{
    //   console.log(ev.detail,ev)
    // })

    (dockManagerRef.current as IgcDockManagerComponent).addEventListener('paneDragOver', ev => {
      console.log(ev.detail);
    });
    (dockManagerRef.current as IgcDockManagerComponent).addEventListener('activePaneChanged', ev => {
      console.log(ev.detail.oldPane);
      console.log(ev.detail.newPane);
    });
    (dockManagerRef.current as IgcDockManagerComponent).addEventListener('dropPane', ev => {
      console.log(ev);
    });
    (dockManagerRef.current as IgcDockManagerComponent).draggable = true;
    (dockManagerRef.current as IgcDockManagerComponent).layout = {
      rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.vertical,
        panes: [
          splitPane1,
          splitPane2
        ]
      }
    };



  }, [])

  const createContentPane = (contentID: string, paneHeader: string): any => {
    const pane = {
      // size: 150,
      header: paneHeader,
      type: IgcDockManagerPaneType.contentPane,
      contentId: contentID,
      allowClose: false
    };
    return pane;
  }

  const createSplitPane = (
    orientation: IgcSplitPaneOrientation,
    contentPanes: any[],
    size?: number
  ): any => {
    const pane = {
      type: IgcDockManagerPaneType.splitPane,
      orientation: orientation,
      panes: contentPanes,
      size: size
    };
    return pane;
  }

  const createTabPane: any = (
    orientation: IgcSplitPaneOrientation,
    contentPanes: any[],
    size?: number
  ) => {
    const pane = {
      type: IgcDockManagerPaneType.documentHost,
      size: size,
      rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: orientation,
        panes: [
          {
            type: IgcDockManagerPaneType.tabGroupPane,
            panes: contentPanes
          }
        ]
      }
    };
    return pane;
  }

  const changeTheme = () => {
    configureTheme("bootstrap");
  }


  return (
    <div className="container sample">
      <button onClick={changeTheme}>切换主题</button>
      <igc-dockmanager id="dockManager" className="dark-theme" ref={dockManagerRef}>

        <button slot="closeButton">x</button>


        <button slot="maximizeButton">
          <FullscreenOutlined />
        </button>

        <button slot="minimizeButton">
          <FullscreenExitOutlined />
        </button>

        <button slot="pinButton">
          <img src="https://www.svgrepo.com/show/154123/pin.svg" alt="" />
        </button>

        <button slot="unpinButton">
          <img src="https://www.svgrepo.com/show/154123/pin.svg" alt="" />
        </button>
        {/* 
        <button slot="splitterHandle">
          1233
          </button> */}
        <div slot="content1" className="dockManagerContent">
          Content 1
        </div>
        <div slot="content2" className="dockManagerContent">
          Content 2
        </div>
        <div slot="content3" className="dockManagerContent">
          <div className={styles.alarmOrAbandonedBox}>

            <AlarmReminder />
          </div>
        </div>
        <div slot="content4" className="dockManagerContent">
          <div className={styles.alarmOrAbandonedBox}>
            <AbandonedOrderReminder />
          </div>
        </div>
        <div slot="content5" className="dockManagerContent">
          <TradeTable />
        </div>
        <div slot="content6" className="dockManagerContent">
          <DayTable />
        </div>

      </igc-dockmanager>
    </div>
  );
}


export default DockManagerOverview