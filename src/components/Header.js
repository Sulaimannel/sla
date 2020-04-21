import React from 'react';
import ReactDOM from 'react-dom';


function Header(){
    return (
        <header>
            <div className="container">
                <h1 className="logo"><a href="/">SLA</a></h1>
                <nav>
                    <ul>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/stock">Stock</a></li>
                        <li><a href="/inbox">Inbox</a></li>
                        <li><a href="/clients">Clients</a></li>
                    </ul>
                    <button className="btn-logout" type="button"><a href="/login">Logout</a></button>
                </nav>
            </div>
        </header>
    );
}

export default Header;