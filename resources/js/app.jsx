import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout/Layout'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        // page.default.layout = page.default.layout || (page => <Layout>{page}</Layout>)
        page.default.layout = name.startsWith('/home') ? undefined : page => <Layout children={page} />

        return page

    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: '#fff',
        height: '5px',
        showSpinner: true
    }
})