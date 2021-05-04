import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog-example';
import LayoutExample from './lib/layout/layout.example';
import Layout from './lib/layout/layout';
import Header from './lib/layout/header';
import Aside from './lib/layout/aside';
import Content from './lib/layout/content';
import Footer from './lib/layout/footer';
import FormExample from './lib/form/form.example';
import './example.scss';

ReactDOM.render(
  <Router>
    <Layout style={{ border: '1px solid red' }}>
      <Header>
        <div className="logo">lui</div>
      </Header>
      <Layout>
        <Aside>
          <h2>组件</h2>
          <ul>
            <li><Link to="/icon">Icon</Link></li>
            <li><Link to="/dialog">Dialog</Link></li>
            <li><Link to="/layout">layout</Link></li>
            <li><Link to="/form">form</Link></li>
          </ul>
        </Aside>
        <Content>
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
