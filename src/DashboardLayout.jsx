import {Layout,Menu} from 'antd'
import { Link } from 'react-router-dom';

const DashboardLayout = ({children}) => {
const {Header,Content,Sider,Footer} = Layout;

const myitems = [
    {
        key:1,
        label:( <Link to='/'>صفحه اصلی</Link> )
    },
    {key:2,
        label:( <Link to='/about'> درباره ما</Link> )
    },
    {key:3,
        label:( <Link to='/contact'> تماس با ما</Link> )}
]

    return ( 
        <Layout>
                    <Header style={{
                        display:'flex',
                        alignItems:'center',
                        borderTopLeftRadius:'10px',
                        borderBottomLeftRadius:'10px',
                        borderTopRightRadius:'10px',
                    }}>
                <Menu items={myitems} theme='dark' mode='horizontal' />
                    </Header>

                    <Content  >

                        <Layout>
                            <Sider style={{borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}  >
                            <Menu  theme='dark' items={myitems} mode='inline' />
                            </Sider>
                            <Content style={{
                                padding:'24px 24px',
                                minHeight:'100vh',
                                background:'white'
                            }}>
                                {children}
                            </Content>
                        </Layout>

                    </Content>

                    
                    <Footer style={{textAlign:'center'}}>تمامی حقوق محفوظ است</Footer>
        </Layout>
     );
}
 
export default DashboardLayout;