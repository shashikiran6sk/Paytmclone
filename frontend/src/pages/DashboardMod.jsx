import React, { useState, useEffect } from 'react';
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export const DashboardMod = () => {
    const [balance, setBalance] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance",  {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }); // Assuming '/balance' is the correct endpoint
                setBalance(response.data.balance);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };
        console.log("1)inside use effect")
        fetchBalance();
        console.log(balance)
        const response =localStorage.getItem("token")
            if(response==null)
            navigate("/")
    }, []);

    

    return (
        
        <div>
            {/* <Check /> */}
            <Appbar />
            <div className="m-8">
                {balance !== null ? (
                    <Balance value={balance} />
                ) : (
                    <p>Loading balance...</p>
                )}{console.log("inside return "+balance)}
                <Users />
            </div>
        </div>
    );
};
