import React from 'react'
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

const LayoutExample: React.FunctionComponent = () => {
    return <div>
        <h1>第一个例子</h1>
        <Layout style={{height: '500px'}}>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
        </Layout>
    </div>
}

export default LayoutExample