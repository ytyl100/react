/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Input, Button, ButtonGroup, UncontrolledTooltip, Media
} from 'reactstrap';
//import { Table, button, Button, Space, Tooltip } from 'antd';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import AutocompleteSearch from '../utilities/AutocompleteSearch';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


const records = [
    {
        id: 1001,
        slug: 'winmax-sport',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'winmax sport',
        image: 'https://reactstorefronts.com/static/img/brand/1.jpg',
        price: 10,
        quantity: 20,
    },
    {
        id: 1002,
        slug: 'belle-wigs',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'belle wigs',
        image: 'https://reactstorefronts.com/static/img/brand/1.jpg',
        price: 10,
        quantity: 20,
    },
    {
        id: 1003,
        slug: 'gardenarts',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'gardenarts',
        image: '../../assets/images/users/avatar-2.jpg',
        price: 10,
        quantity: 20,
    },
    {
        id: 1004,
        slug: 'nova-wigs',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'nova wigs',
        image: 'assets/images/users/avatar-2.jpg',
        price: 10,
        quantity: 20,
    },
];

const imageFormatter = (cell) => (
    <div>
        <img src={cell} className="mr-2 rounded-circle" height="36" alt="" />
        {/* <Media className="mt-3 p-1" width="300px">
           
            <Media body>
                <h5 className="mt-0 mb-0 font-size-14">
                    shinne cooker
                </h5>
                <p className="mt-1 mb-0 text-muted">Our new project brand new shinne cooker</p>
            </Media>
        </Media> */}
    </div>
);

const columns = [
    {
        dataField: 'id',
        text: '编号',
        headerStyle: { width: '10%' },
        style: { width: '10%' },
        sort: true,
    },
    {
        dataField: 'image',
        text: '产品缩略图',
        formatter: imageFormatter,
        // headerStyle: { width: '35%' },
        // style: { width: '35%' },
        sort: false,
    },
    {
        dataField: 'name',
        text: '产品名称',
        sort: true,
    },
    {
        dataField: 'price',
        text: '单位价格',
        sort: true,
    },
    {
        dataField: 'quantity',
        text: '库存数量',
        sort: true,
    },
];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">显示</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">条记录</label>
    </React.Fragment>
);

class UpsellProducts extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            selected: [], // Array to store the selected row keys
            storeData: records,
        };
    }

    handleEditItem = (id) => {
        this.props.history.push(`/ecommerce/brand/board/${id}`);
    };

    handleDelItem = (id) => {

    };

    handleRowSelect = (row, isSelected) => {
        const selectedRows = isSelected
            ? [...this.state.selected, row.id]
            : this.state.selected.filter((selectedId) => selectedId !== row.id);
        this.setState({ selected: selectedRows });
    };

    handleBatchDelete = () => {
        const updatedData = records.filter((row) => !this.state.selected.includes(row.id));
        const remainData = records.filter((row) => this.state.selected.slice(row.id));

        this.setState({ selected: [] }); // Clear selected rows
        this.setState({ storeData: updatedData }); // Clear selected rows
        console.log('update data:', updatedData);
        console.log('remain data:', this.state.storeData);
        // Do something with the updated data (e.g., update the data source, show a confirmation message)
    };

    render() {
        const { SearchBar } = Search;
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            style: { backgroundColor: '#727cf5', color: '#fff' },
        };

        const expandRow = {
            renderer: row => (
                <Card >
                    <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                        <div className="row">

                            <div className="col-lg-2 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-calender text-danger"></i> 产品类目</p>
                                    <h5 className="font-size-16">0</h5>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-calendar-slash text-danger"></i> 产品数量</p>
                                    <h5 className="font-size-16">159</h5>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-dollar-alt text-danger"></i> 订单总额</p>
                                    <h5 className="font-size-16">$1325</h5>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-user text-danger"></i> 客户数量</p>
                                    <h5 className="font-size-16">223</h5>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="mt-4" style={{ float: "right" }}>
                                    <span className="dtr-data">
                                        <button type="button" onClick={() => { this.handleDelItem(row.id); }} class="btn btn-secondary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">移除产品</button>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            ),
            showExpandColumn: true,
            onlyOneExpanding: true,
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                return isAnyExpands ? <i className='uil uil-lock-open-alt'></i> : <i className='uil uil-padlock'></i>;
            },
            expandColumnRenderer: ({ expanded }) => {
                return expanded ? <i className='uil uil-lock-open-alt'></i> : <i className='uil uil-padlock'></i>;
            },
        };

        return <React.Fragment>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                产品系列管理可以根据电商商家所拥有的在线销售的产品系列进行营销归类类目，拥有各自独立的库存与产品管理，也可以分配各自的产品类目；
                            </p>
                            <AutocompleteSearch></AutocompleteSearch>
                            <hr></hr>
                            <ToolkitProvider
                                bootstrap4
                                keyField="id"
                                data={this.state.storeData}
                                columns={columns}
                                search
                            >
                                {props => (
                                    <React.Fragment>
                                        <Row>
                                            <Col xl={2}>
                                                <SearchBar {...props.searchProps} />
                                            </Col>
                                            <Col xl={8} className="text-left">
                                                <ButtonGroup className="mr-1">
                                                    <Button id="archive" color="light">
                                                        <i className="uil uil-archive-alt"></i>归档
                                                    </Button>
                                                    <UncontrolledTooltip placement="top" target="archive">归档</UncontrolledTooltip>
                                                    <Button id="spam" color="light">
                                                        <i className="uil uil-exclamation-octagon"></i>待处理
                                                    </Button>
                                                    <UncontrolledTooltip placement="top" target="spam">标记待处理</UncontrolledTooltip>
                                                    <Button id="delete" color="light" onClick={() => { this.handleBatchDelete(); }}>
                                                        <i className="uil uil-trash-alt"></i>删除
                                                    </Button>
                                                    <UncontrolledTooltip placement="top" target="delete">批量删除</UncontrolledTooltip>
                                                </ButtonGroup>
                                            </Col>
                                            <Col xl={2} className="text-right">

                                            </Col>
                                        </Row>
                                        <BootstrapTable
                                            {...props.baseProps}
                                            bordered={false}
                                            data={records}
                                            defaultSorted={defaultSorted}
                                            pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
                                            expandRow={expandRow}
                                            selectRow={selectRow}
                                            wrapperClasses="table-responsive"
                                        />
                                    </React.Fragment>
                                )}
                            </ToolkitProvider>

                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}


export default UpsellProducts;