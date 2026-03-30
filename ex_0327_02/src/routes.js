import { Component } from 'react';
import Home from './pages/Home';
import Moves from './pages/Movies';
import User from './components/User';
import User_pa from './pages/User';

export default [
    {path:'/', Component:Home},
    {path:'/movies', Component:Moves},
    {path:'/user', Component:User},
    {path: '/user/:id', Component: User_pa }
]