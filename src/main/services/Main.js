import React from 'react';
import Button from '../parts/Button/Button';
import Row from '../parts/Row/Row';
import { MdPermScanWifi } from "react-icons/md";
import Toolbar from './Toolbar/Toolbar';

class Main extends React.Component {
    render() {
        return(
            <Row vertical spacing={10}>
                <Toolbar id='toolbar'/>
                <Row vertical>
                    <Button id='test' text='bloop' icon={<MdPermScanWifi/>} />
                    <div>foo</div>
                </Row>
            </Row>
        );
    }
}

export default Main;
