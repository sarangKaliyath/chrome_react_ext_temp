import React, { useContext, useEffect, useState } from 'react';
import "./main.css"
import axiosInstance from '../../axios.config';
import List from '../list';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [tableData, setTableData] = useState({});

    useEffect(() => {
        setTableData(JSON.parse(window.localStorage.getItem("tableData")))
        getTableData();
    }, [])

    const getTableData = async () => {
        await axiosInstance.get('/deviceinfo', { headers: { Authorization: token } })
            .then((res) => {
                console.log({ "data": res.data })
                setTableData(res?.data);
                window.localStorage.setItem("tableData", JSON.stringify(res.data))
            })
            .catch((err) => {
                if (err.status === 401) {
                    window.localStorage.removeItem("token");
                    navigate("/");
                }
            });
    }

    return (
        <div className='main_container'>
            <div className='main_header'>
                Header
            </div>
            <List tableData={tableData} />
        </div>
    )
}

export default Main;