import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout style={{ height: '500px' }}>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
      <h2>第二个例子</h2>
      <Layout style={{ height: '500px' }}>
        <Header>header</Header>
        <Content>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
        </Content>
        <Footer>footer</Footer>
      </Layout>
      <h2>第三个例子</h2>
      <Layout style={{ height: '500px' }}>
        <Header>Header</Header>
        <Content>
          <Layout>
            <Content>content</Content>
            <Aside>Aside</Aside>
          </Layout>
        </Content>
      </Layout>
      <h2>第四个例子</h2>
      <Layout style={{ height: '500px' }}>
        <Aside>Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Content>content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample;
