import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Page2, Page3, Error } from '@/pages'

export default function Router () {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/page2' element={<Page2 />} />
                <Route path='/page3' element={<Page3 />} />
                <Route path='/404' element={<Error />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};