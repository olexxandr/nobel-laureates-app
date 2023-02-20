import { PaginatedItems } from '../Paginator';
import MaterialUiTable from '../MaterialUiTable';
import TableWithPaginator from '../TableWithPaginator';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Flags from "country-flag-icons/react/3x2";

export default function Main({laureatesCounters}){

    return (
        <Tabs>
          <TabList>
            <Tab>Table</Tab>
            <Tab>Table with paginator</Tab>
            <Tab>List</Tab>
            <Tab>List with paginator</Tab>
          </TabList>
          <TabPanel>
            <h2>Number of Nobel laureates per country</h2>
            <MaterialUiTable laureatesCounters={laureatesCounters}/>
          </TabPanel>
          <TabPanel>
            <h2>Number of Nobel laureates per country</h2>
            <TableWithPaginator laureatesCounters={laureatesCounters}/>
          </TabPanel>
          <TabPanel>
            <h2>Number of Nobel laureates per country</h2>
            <ul className="no-bullets">
              {
                laureatesCounters.map(item => {
                  const Flag = Flags[item.code]
                  return <li key={item.country}>
                    {Flag && <div className='flag'><Flag/></div>} {item.country}: {item.counter}
                  </li>
                })
              }
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Number of Nobel laureates per country</h2>
            <PaginatedItems itemsPerPage={10} items={laureatesCounters}/>
          </TabPanel>
        </Tabs>
    );
}
