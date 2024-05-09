/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Input, Button, ButtonGroup, UncontrolledTooltip,
} from 'reactstrap';
import { Badge } from 'antd';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageTitle from '../../components/PageTitle';

const records = [
    {
        id: 1001,
        vender: 'winmax sport',
        intro: '华南地区最大专业体育用品品牌',
        address: '广州市体育西路123号之一',
        name: 'Burt',
        image: 'https://reactstorefronts.com/static/img/brand/1.jpg',
        status: '启动',
    },
    {
        id: 1002,
        vender: 'winmax sport',
        intro: '华南地区最大专业体育用品品牌',
        address: '广州市体育西路123号之一',
        name: 'Long',
        image: 'https://reactstorefronts.com/static/img/brand/1.jpg',
        status: '启动',
    },
    {
        id: 1003,
        vender: 'winmax sport',
        intro: '华南地区最大专业体育用品品牌',
        address: '广州市体育西路123号之一',
        name: 'Alvarado',
        image: '../../assets/images/users/avatar-2.jpg',
        status: '启动',
    },
    {
        id: 1004,
        vender: 'winmax sport',
        intro: '华南地区最大专业体育用品品牌',
        address: '广州市体育西路123号之一',
        name: 'Lilia',
        image: 'assets/images/users/avatar-2.jpg',
        status: '启动',
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

const statusFormatter = (cell) => (
    <div>
        <Badge status="success" text={cell} />
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
        text: '图片展示',
        formatter: imageFormatter,
        // headerStyle: { width: '35%' },
        // style: { width: '35%' },
        sort: false,
    },
    {
        dataField: 'name',
        text: '系列标题',
        sort: true,
    },
    {
        dataField: 'intro',
        text: '系列介绍',
        sort: false,
    },
    {
        dataField: 'status',
        text: '状态',
        formatter: statusFormatter,
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

class CollectionItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            selected: [], // Array to store the selected row keys
            storeData: records,
        };
    }

    handleAdd = () => {
        //this.props.history.push(`/catalog/${parameterValue}`);
        this.props.history.push(`/ecommerce/collection/board`);
    }

    handleEditItem = (id) => {
        this.props.history.push(`/ecommerce/collection/board/${id}`);
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
        const { ExportCSVButton } = CSVExport;


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

                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-calender text-danger"></i> 产品类目</p>
                                    <h5 className="font-size-16">0</h5>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-calendar-slash text-danger"></i> 产品数量</p>
                                    <h5 className="font-size-16">159</h5>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-dollar-alt text-danger"></i> 订单总额</p>
                                    <h5 className="font-size-16">$1325</h5>
                                </div>
                            </div>

                            <div className="col-lg-1 col-md-3">
                                <div className="mt-4">
                                    <p className="mb-2"><i className="uil-user text-danger"></i> 客户数量</p>
                                    <h5 className="font-size-16">223</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mt-4" style={{ float: "right" }}>
                                    <span className="dtr-data">
                                        <button type="button" onClick={() => { this.handleEditItem(row.id); }} class="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">更新资料</button>
                                        <button type="button" onClick={() => { this.handleDelItem(row.id); }} class="btn btn-secondary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">删除商铺</button>
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
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'产品系列管理'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                产品系列为电商根据产品品类与特性所进行的分类标签管理，可以按照整批产品的属性安排上架，下架。
                            </p>

                            <ToolkitProvider
                                bootstrap4
                                keyField="id"
                                data={records}
                                columns={columns}
                                search
                                exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
                                {props => (
                                    <React.Fragment>
                                        <Row>
                                            <Col xl={2}>
                                                <SearchBar {...props.searchProps} />
                                            </Col>
                                            <Col xl={2} className="text-left">
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
                                            <Col xl={8} className="text-right">
                                                <div className="btn-group mb-2">
                                                    <Button className="btn btn-primary" onClick={() => { this.handleAdd(); }}>
                                                        新增系列
                                                    </Button>
                                                    <ExportCSVButton {...props.csvProps} className="btn btn-primary">
                                                        导出 CSV
                                                    </ExportCSVButton >
                                                    <Button className="btn btn-secondary">
                                                        导入
                                                    </Button>
                                                    <Button className="btn btn-secondary">
                                                        打印
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>

                                        <BootstrapTable
                                            {...props.baseProps}
                                            bordered={true}
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


export default CollectionItems;