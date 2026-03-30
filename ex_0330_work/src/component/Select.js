import React from 'react';
import { Link, Routes, Router } from 'react-router-dom';
import routes from '../routes.js';

export default function Select() {
    return (
        <ul>
            {
                routes.map((route) => (
                    <li>
                        <Link to={route.path + '/' + route.id} element={<route.component />}>{route.name}</Link>
                    </li>
                ))
            }
        </ul>
    );
}