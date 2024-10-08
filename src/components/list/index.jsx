import React from 'react';
import "./list.css"
import { Button } from '@mui/material';

const List = ({ tableData }) => {


    const handleClick = (deviceId) => {
        if (typeof chrome !== undefined && chrome.tabs) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const [tab] = tabs;
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: (id) => {
                        window.localStorage.setItem('deviceExternalId', id);
                        window.sessionStorage.clear();
                        location.reload();
                    },
                    args: [deviceId]
                });
            });
        } else {
            console.error("Chrome API is not available");
        }
    }
    return (
        <div className='list_container'>
            {
                tableData ? Object.entries(tableData).map(el => (
                    <div className='device_table'>
                        <div className='device_group'>{el[0]}</div>
                        {
                            el[1]?.length > 0 ? el[1]?.map(({ deviceName, deviceId }) => (
                                <div className='device_row'>
                                    <div>
                                        {deviceName}
                                    </div>
                                    <div>
                                        <Button variant='outline' size='large' onClick={() => handleClick(deviceId)}>Open</Button>
                                    </div>
                                </div>
                            )) : (
                                <div>
                                    DEVICE INFO NOT AVAILABLE.
                                </div>
                            )
                        }
                    </div>
                )) : (
                    <div>No Item To Display</div>
                )
            }
        </div>
    )
}

export default List;