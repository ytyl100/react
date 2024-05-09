import React, { useState, useEffect, useRef } from 'react';
import { Media, Row, Col } from 'reactstrap';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import MediaLib from './MediaLib';
import dayjs from 'dayjs';
import CatalogProducts from './CatalogProducts';
import { getApiData, saveApiData } from '../../../helpers/handleApi';
import { slugify, generateVaribles, getImgVal, setAttrOptions, setSelAttrOptions, setDefAttrOptions, includeFilter } from '../../../helpers/tools';
import {
    AutoComplete,
    Button,
    Cascader,
    Switch,
    Form,
    Input,
    Select,
    Table,
    TreeSelect,
    InputNumber,
    Drawer,
    Space,
    Badge,
    Tag,
    Radio,
    DatePicker,
    Spin, Modal
} from 'antd';
import ProductBaseAttributeForm from './ProductBaseAttributeForm';

const { Option } = Select;
const residences = [
    {
        value: 'Alabama',
        label: 'Alabama',
        children: [
            { value: 'Birmingham', label: 'Birmingham', },
            { value: 'Huntsville', label: 'Huntsville', },
            { value: 'Mobile', label: 'Mobile', },
            { value: 'Montgomery', label: 'Montgomery', },
            { value: 'Tuscaloosa', label: 'Tuscaloosa', },
            { value: 'Auburn', label: 'Auburn', },
            { value: 'Hoover', label: 'Hoover', },
            { value: 'Florence', label: 'Florence', },
            { value: 'Anniston', label: 'Anniston', },
            { value: 'Dothan', label: 'Dothan', },
            { value: 'Decatur', label: 'Decatur', },
            { value: 'Madison', label: 'Madison', },
            { value: 'Vestavia Hills', label: 'Vestavia Hills', },
            { value: 'Phenix City', label: 'Phenix City', },
            { value: 'Prattville', label: 'Prattville', },
            { value: 'Gadsden', label: 'Gadsden', },
            { value: 'Alabaster', label: 'Alabaster', },
            { value: 'Opelika', label: 'Opelika', },
            { value: 'Northport', label: 'Northport', },
            { value: 'Enterprise', label: 'Enterprise', },
            { value: 'Daphne', label: 'Daphne', },
            { value: 'Homewood', label: 'Homewood', },
            { value: 'Bessemer', label: 'Bessemer', },
            { value: 'Athens', label: 'Athens', },
            { value: 'Trussville', label: 'Trussville', },
            { value: 'Pelham', label: 'Pelham', },
            { value: 'Albertville', label: 'Albertville', },
            { value: 'Oxford', label: 'Oxford', },
            { value: 'Mountain Brook', label: 'Mountain Brook', },
            { value: 'Fairhope', label: 'Fairhope', },
            { value: 'Helena', label: 'Helena', },
            { value: 'Foley', label: 'Foley', },
            { value: 'Prichard', label: 'Prichard', },
            { value: 'Selma', label: 'Selma', },
            { value: 'Tillmans Corner', label: 'Tillmans Corner', },
            { value: 'Cullman', label: 'Cullman', },
            { value: 'Troy', label: 'Troy', },
            { value: 'Hueytown', label: 'Hueytown', },
            { value: 'Millbrook', label: 'Millbrook', },
            { value: 'Center Point', label: 'Center Point', },
            { value: 'Calera', label: 'Calera', },
            { value: 'Muscle Shoals', label: 'Muscle Shoals', },
            { value: 'Saraland', label: 'Saraland', },
            { value: 'Gardendale', label: 'Gardendale', },
            { value: 'Talladega', label: 'Talladega', },
            { value: 'Scottsboro', label: 'Scottsboro', },
            { value: 'Hartselle', label: 'Hartselle', },
            { value: 'Alexander City', label: 'Alexander City', },
            { value: 'Fort Payne', label: 'Fort Payne', },
            { value: 'Gulf Shores', label: 'Gulf Shores', },
            { value: 'Chelsea', label: 'Chelsea', },
            { value: 'Ozark', label: 'Ozark', },
            { value: 'Jasper', label: 'Jasper', },
            { value: 'Irondale', label: 'Irondale', },
            { value: 'McCalla', label: 'McCalla', },
            { value: 'Moody', label: 'Moody', },
            { value: 'Jacksonville', label: 'Jacksonville', },
            { value: 'Pell City', label: 'Pell City', },
            { value: 'Eufaula', label: 'Eufaula', },
            { value: 'Sylacauga', label: 'Sylacauga', },
            { value: 'Leeds', label: 'Leeds', },
            { value: 'Russellville', label: 'Russellville', },
            { value: 'Saks', label: 'Saks', },
            { value: 'Valley', label: 'Valley', },
            { value: 'Clay', label: 'Clay', },
            { value: 'Fairfield', label: 'Fairfield', },
            { value: 'Rainbow City', label: 'Rainbow City', },
            { value: 'Boaz', label: 'Boaz', },
            { value: 'Spanish Fort', label: 'Spanish Fort', },
            { value: 'Fultondale', label: 'Fultondale', },
            { value: 'Pleasant Grove', label: 'Pleasant Grove', },
            { value: 'Meadowbrook', label: 'Meadowbrook', },
            { value: 'Sheffield', label: 'Sheffield', },
            { value: 'Southside', label: 'Southside', },
            { value: 'Forestdale', label: 'Forestdale', },
            { value: 'Pike Road', label: 'Pike Road', },
            { value: 'Tuskegee', label: 'Tuskegee', },
            { value: 'Tuscumbia', label: 'Tuscumbia', },
            { value: 'Andalusia', label: 'Andalusia', },
            { value: 'Atmore', label: 'Atmore', },
            { value: 'Clanton', label: 'Clanton', },
            { value: 'Guntersville', label: 'Guntersville', },
            { value: 'Arab', label: 'Arab', },
            { value: 'Meridianville', label: 'Meridianville', },
            { value: 'Orange Beach', label: 'Orange Beach', },
            { value: 'Bay Minette', label: 'Bay Minette', },
            { value: 'Brook Highland', label: 'Brook Highland', },
            { value: 'Greenville', label: 'Greenville', },
            { value: 'Pinson', label: 'Pinson', },
            { value: 'Demopolis', label: 'Demopolis', },
            { value: 'Wetumpka', label: 'Wetumpka', },
            { value: 'Hamilton', label: 'Hamilton', },
            { value: 'Montevallo', label: 'Montevallo', },
            { value: 'Lincoln', label: 'Lincoln', },
            { value: 'Lanett', label: 'Lanett', },
            { value: 'Oneonta', label: 'Oneonta', },
            { value: 'Satsuma', label: 'Satsuma', },
            { value: 'Opp', label: 'Opp', },
            { value: 'Harvest', label: 'Harvest', },
            { value: 'Robertsdale', label: 'Robertsdale', },
            { value: 'Chickasaw', label: 'Chickasaw', },
            { value: 'Highland Lakes', label: 'Highland Lakes', },
            { value: 'Tarrant', label: 'Tarrant', },
            { value: 'Grayson Valley', label: 'Grayson Valley', },
            { value: 'Monroeville', label: 'Monroeville', },
            { value: 'Theodore', label: 'Theodore', },
            { value: 'Fort Rucker', label: 'Fort Rucker', },
            { value: 'Attalla', label: 'Attalla', },
            { value: 'Moores Mill', label: 'Moores Mill', },
            { value: 'Rainsville', label: 'Rainsville', },
            { value: 'Smiths Station', label: 'Smiths Station', },
            { value: 'Roanoke', label: 'Roanoke', },
            { value: 'Glencoe', label: 'Glencoe', },
            { value: 'Redland', label: 'Redland', },
            { value: 'Brewton', label: 'Brewton', },
            { value: 'Midfield', label: 'Midfield', },
            { value: 'Tallassee', label: 'Tallassee', },
            { value: 'Margaret', label: 'Margaret', },
            { value: 'Holtville', label: 'Holtville', },
            { value: 'Semmes', label: 'Semmes', },
            { value: 'Headland', label: 'Headland', },
            { value: 'Daleville', label: 'Daleville', },
            { value: 'Piedmont', label: 'Piedmont', },
            { value: 'Winfield', label: 'Winfield', },
            { value: 'Odenville', label: 'Odenville', },
            { value: 'Holt', label: 'Holt', },
            { value: 'Jackson', label: 'Jackson', },
            { value: 'Childersburg', label: 'Childersburg', },
            { value: 'Springville', label: 'Springville', },
            { value: 'Argo', label: 'Argo', },
            { value: 'Hokes Bluff', label: 'Hokes Bluff', },
            { value: 'Adamsville', label: 'Adamsville', },
            { value: 'Haleyville', label: 'Haleyville', },
            { value: 'Fayette', label: 'Fayette', },
            { value: 'Geneva', label: 'Geneva', },
            { value: 'Columbiana', label: 'Columbiana', },
            { value: 'Mount Olive', label: 'Mount Olive', },
            { value: 'Valley Grande', label: 'Valley Grande', },
            { value: 'Alexandria', label: 'Alexandria', },
            { value: 'Pine Level', label: 'Pine Level', },
            { value: 'Citronelle', label: 'Citronelle', },
            { value: 'Hazel Green', label: 'Hazel Green', },
            { value: 'Cottondale', label: 'Cottondale', },
            { value: 'Kimberly', label: 'Kimberly', },
            { value: 'Ladonia', label: 'Ladonia', },
            { value: 'Thomasville', label: 'Thomasville', },
            { value: 'Loxley', label: 'Loxley', },
            { value: 'Evergreen', label: 'Evergreen', },
            { value: 'Centre', label: 'Centre', },
            { value: 'Priceville', label: 'Priceville', },
            { value: 'Emerald Mountain', label: 'Emerald Mountain', },
            { value: 'Elba', label: 'Elba', },
            { value: 'Grand Bay', label: 'Grand Bay', },
            { value: 'Heflin', label: 'Heflin', },
            { value: 'Union Springs', label: 'Union Springs', },
            { value: 'Weaver', label: 'Weaver', },
            { value: 'Lake View', label: 'Lake View', },
            { value: 'Moulton', label: 'Moulton', },
            { value: 'Marion', label: 'Marion', },
            { value: 'Livingston', label: 'Livingston', },
            { value: 'Brent', label: 'Brent', },
            { value: 'Warrior', label: 'Warrior', },
            { value: 'Red Bay', label: 'Red Bay', },
            { value: 'Hanceville', label: 'Hanceville', },
            { value: 'East Brewton', label: 'East Brewton', },
            { value: 'West End-Cobb Town', label: 'West End-Cobb Town', },
            { value: 'Dadeville', label: 'Dadeville', },
            { value: 'Huguley', label: 'Huguley', },
            { value: 'Brighton', label: 'Brighton', },
            { value: 'Eutaw', label: 'Eutaw', },
            { value: 'New Hope', label: 'New Hope', },
            { value: 'Choccolocco', label: 'Choccolocco', },
            { value: 'Eagle Point', label: 'Eagle Point', },
            { value: 'Centreville', label: 'Centreville', },
            { value: 'Triana', label: 'Triana', },
            { value: 'Moundville', label: 'Moundville', },
            { value: 'Creola', label: 'Creola', },
            { value: 'Dora', label: 'Dora', },
            { value: 'Graysville', label: 'Graysville', },
            { value: 'Luverne', label: 'Luverne', },
            { value: 'Stevenson', label: 'Stevenson', },
            { value: 'Sumiton', label: 'Sumiton', },
            { value: 'La Fayette', label: 'La Fayette', },
            { value: 'Underwood-Petersville', label: 'Underwood-Petersville', },
            { value: 'Jemison', label: 'Jemison', },
            { value: 'Hartford', label: 'Hartford', },
            { value: 'Lineville', label: 'Lineville', },
            { value: 'Taylor', label: 'Taylor', },
            { value: 'Indian Springs Village', label: 'Indian Springs Village', },
            { value: 'Stapleton', label: 'Stapleton', },
            { value: 'Bayou La Batre', label: 'Bayou La Batre', },
            { value: 'Remlap', label: 'Remlap', },
            { value: 'Clayton', label: 'Clayton', },
            { value: 'Bon Secour', label: 'Bon Secour', },
            { value: 'Trinity', label: 'Trinity', },
            { value: 'Guin', label: 'Guin', },
            { value: 'Owens Cross Roads', label: 'Owens Cross Roads', },
            { value: 'Greensboro', label: 'Greensboro', },
            { value: 'Thorsby', label: 'Thorsby', },
            { value: 'Ashford', label: 'Ashford', },
            { value: 'Carlisle-Rockledge', label: 'Carlisle-Rockledge', },
            { value: 'Good Hope', label: 'Good Hope', },
            { value: 'Henagar', label: 'Henagar', },
            { value: 'Riverside', label: 'Riverside', },
            { value: 'Brookwood', label: 'Brookwood', },
            { value: 'Butler', label: 'Butler', },
            { value: 'York', label: 'York', },
            { value: 'Kinsey', label: 'Kinsey', },
            { value: 'Bridgeport', label: 'Bridgeport', },
            { value: 'Elberta', label: 'Elberta', },
            { value: 'Brundidge', label: 'Brundidge', },
            { value: 'Morris', label: 'Morris', },
            { value: 'Aliceville', label: 'Aliceville', },
            { value: 'Abbeville', label: 'Abbeville', },
            { value: 'Cowarts', label: 'Cowarts', },
            { value: 'Wilsonville', label: 'Wilsonville', },
            { value: 'Whitesboro', label: 'Whitesboro', },
            { value: 'Camden', label: 'Camden', },
            { value: 'Lillian', label: 'Lillian', },
            { value: 'Deatsville', label: 'Deatsville', },
            { value: 'Lipscomb', label: 'Lipscomb', },
            { value: 'Coaling', label: 'Coaling', },
            { value: 'Ashville', label: 'Ashville', },
            { value: 'Grove Hill', label: 'Grove Hill', },
            { value: 'Uniontown', label: 'Uniontown', },
            { value: 'Collinsville', label: 'Collinsville', },
            { value: 'Point Clear', label: 'Point Clear', },
            { value: 'Selmont-West Selmont', label: 'Selmont-West Selmont', },
            { value: 'Westover', label: 'Westover', },
            { value: 'Linden', label: 'Linden', },
            { value: 'Reform', label: 'Reform', },
            { value: 'Crossville', label: 'Crossville', },
            { value: 'Vernon', label: 'Vernon', },
            { value: 'Midland City', label: 'Midland City', },
            { value: 'Fort Deposit', label: 'Fort Deposit', },
            { value: 'Marbury', label: 'Marbury', },
            { value: 'Blountsville', label: 'Blountsville', },
            { value: 'Vance', label: 'Vance', },
            { value: 'Sylvania', label: 'Sylvania', },
            { value: 'Level Plains', label: 'Level Plains', },
            { value: 'Sardis City', label: 'Sardis City', },
            { value: 'Slocomb', label: 'Slocomb', },
            { value: 'Vincent', label: 'Vincent', },
            { value: 'Stewartville', label: 'Stewartville', },
            { value: 'Ragland', label: 'Ragland', },
            { value: 'Florala', label: 'Florala', },
            { value: 'Dauphin Island', label: 'Dauphin Island', },
            { value: 'Double Springs', label: 'Double Springs', },
            { value: 'Ashland', label: 'Ashland', },
            { value: 'Flomaton', label: 'Flomaton', },
            { value: 'Rehobeth', label: 'Rehobeth', },
            { value: 'Malvern', label: 'Malvern', },
            { value: 'Cordova', label: 'Cordova', },
            { value: 'Cedar Bluff', label: 'Cedar Bluff', },
            { value: 'Frisco City', label: 'Frisco City', },
            { value: 'Smoke Rise', label: 'Smoke Rise', },
            { value: 'Concord', label: 'Concord', },
            { value: 'Sylvan Springs', label: 'Sylvan Springs', },
            { value: 'Sulligent', label: 'Sulligent', },
            { value: 'Newton', label: 'Newton', },
            { value: 'Gordo', label: 'Gordo', },
            { value: 'Harpersville', label: 'Harpersville', },
            { value: 'Munford', label: 'Munford', },
            { value: 'Bear Creek', label: 'Bear Creek', },
            { value: 'Elmore', label: 'Elmore', },
            { value: 'Mount Vernon', label: 'Mount Vernon', },
            { value: 'Samson', label: 'Samson', },
            { value: 'Locust Fork', label: 'Locust Fork', },
            { value: 'Grant', label: 'Grant', },
            { value: 'Carbon Hill', label: 'Carbon Hill', },
            { value: 'Rock Creek', label: 'Rock Creek', },
            { value: 'Summerdale', label: 'Summerdale', },
            { value: 'Hackleburg', label: 'Hackleburg', },
            { value: 'Altoona', label: 'Altoona', },
            { value: 'Magnolia Springs', label: 'Magnolia Springs', },
            { value: 'Blue Ridge', label: 'Blue Ridge', },
            { value: 'Hayden', label: 'Hayden', },
            { value: 'Lookout Mountain', label: 'Lookout Mountain', },
            { value: 'Ballplay', label: 'Ballplay', },
            { value: 'Webb', label: 'Webb', },
            { value: 'Georgiana', label: 'Georgiana', },
            { value: 'West Blocton', label: 'West Blocton', },
            { value: 'Falkville', label: 'Falkville', },
            { value: 'Rogersville', label: 'Rogersville', },
            { value: 'Fayetteville', label: 'Fayetteville', },
            { value: 'Fyffe', label: 'Fyffe', },
            { value: 'Camp Hill', label: 'Camp Hill', },
            { value: 'Shoal Creek', label: 'Shoal Creek', },
            { value: 'Steele', label: 'Steele', },
            { value: 'Parrish', label: 'Parrish', },
            { value: 'Cleveland', label: 'Cleveland', },
            { value: 'Ardmore', label: 'Ardmore', },
            { value: 'Eclectic', label: 'Eclectic', },
            { value: 'Geraldine', label: 'Geraldine', },
            { value: 'Susan Moore', label: 'Susan Moore', },
            { value: 'Brookside', label: 'Brookside', },
            { value: 'Woodstock', label: 'Woodstock', },
            { value: 'Snead', label: 'Snead', },
            { value: 'New Brockton', label: 'New Brockton', },
            { value: 'Killen', label: 'Killen', },
            { value: 'Redstone Arsenal', label: 'Redstone Arsenal', },
            { value: 'Clio', label: 'Clio', },
            { value: 'Dunnavant', label: 'Dunnavant', },
            { value: 'Millport', label: 'Millport', },
            { value: 'Brilliant', label: 'Brilliant', },
            { value: 'Goodwater', label: 'Goodwater', },
            { value: 'Ohatchee', label: 'Ohatchee', },
            { value: 'Cottonwood', label: 'Cottonwood', },
            { value: 'Pisgah', label: 'Pisgah', },
            { value: 'Oak Grove', label: 'Oak Grove', },
            { value: 'Coats Bend', label: 'Coats Bend', },
            { value: 'Baileyton', label: 'Baileyton', },
            { value: 'Egypt', label: 'Egypt', },
            { value: 'Carrollton', label: 'Carrollton', },
            { value: 'Notasulga', label: 'Notasulga', },
            { value: 'Skyline', label: 'Skyline', },
            { value: 'Coosada', label: 'Coosada', },
            { value: 'Coker', label: 'Coker', },
            { value: 'Minor', label: 'Minor', },
            { value: 'Tidmore Bend', label: 'Tidmore Bend', },
            { value: 'Powell', label: 'Powell', },
            { value: 'Hayneville', label: 'Hayneville', },
            { value: 'Woodville', label: 'Woodville', },
            { value: 'Douglas', label: 'Douglas', },
            { value: 'Town Creek', label: 'Town Creek', },
            { value: 'New Market', label: 'New Market', },
            { value: 'Autaugaville', label: 'Autaugaville', },
            { value: 'Vandiver', label: 'Vandiver', },
            { value: 'Berry', label: 'Berry', },
            { value: 'Rockford', label: 'Rockford', },
            { value: 'Pea Ridge', label: 'Pea Ridge', },
            { value: 'Brantley', label: 'Brantley', },
            { value: 'Section', label: 'Section', },
            { value: 'Hollywood', label: 'Hollywood', },
            { value: 'Hobson City', label: 'Hobson City', },
            { value: 'Lexington', label: 'Lexington', },
            { value: 'McKenzie', label: 'McKenzie', },
            { value: 'Cherokee', label: 'Cherokee', },
            { value: 'Walnut Grove', label: 'Walnut Grove', },
            { value: 'New Union', label: 'New Union', },
            { value: 'Forkland', label: 'Forkland', },
            { value: 'Leroy', label: 'Leroy', },
            { value: 'Wilton', label: 'Wilton', },
            { value: 'Columbia', label: 'Columbia', },
            { value: 'Littleville', label: 'Littleville', },
            { value: 'Brantleyville', label: 'Brantleyville', },
            { value: 'Allgood', label: 'Allgood', },
            { value: 'Pine Hill', label: 'Pine Hill', },
            { value: 'Wedowee', label: 'Wedowee', },
            { value: 'Shelby', label: 'Shelby', },
            { value: 'Courtland', label: 'Courtland', },
            { value: 'Franklin', label: 'Franklin', },
            { value: 'Edgewater', label: 'Edgewater', },
            { value: 'Gallant', label: 'Gallant', },
            { value: 'Valley Head', label: 'Valley Head', },
            { value: 'Mignon', label: 'Mignon', },
            { value: 'New Site', label: 'New Site', },
            { value: 'Wadley', label: 'Wadley', },
            { value: 'Rosa', label: 'Rosa', },
            { value: 'Holly Pond', label: 'Holly Pond', },
            { value: 'Mosses', label: 'Mosses', },
            { value: 'Oakman', label: 'Oakman', },
            { value: 'Lynn', label: 'Lynn', },
            { value: 'Sand Rock', label: 'Sand Rock', },
            { value: 'Kinston', label: 'Kinston', },
            { value: 'Pickensville', label: 'Pickensville', },
            { value: 'Chatom', label: 'Chatom', },
            { value: 'Sterrett', label: 'Sterrett', },
            { value: 'Hollins', label: 'Hollins', },
            { value: 'Reece City', label: 'Reece City', },
            { value: 'Belle Fontaine', label: 'Belle Fontaine', },
            { value: 'Phil Campbell', label: 'Phil Campbell', },
            { value: 'Fairview', label: 'Fairview', },
            { value: 'Pine Ridge', label: 'Pine Ridge', },
            { value: 'Jacksons Gap', label: 'Jacksons Gap', },
            { value: 'Our Town', label: 'Our Town', },
            { value: 'Silverhill', label: 'Silverhill', },
            { value: 'Leesburg', label: 'Leesburg', },
            { value: 'Addison', label: 'Addison', },
            { value: 'Leighton', label: 'Leighton', },
            { value: 'Mulga', label: 'Mulga', },
            { value: 'Joppa', label: 'Joppa', },
            { value: 'Hillsboro', label: 'Hillsboro', },
            { value: 'Hollis Crossroads', label: 'Hollis Crossroads', },
            { value: 'Maplesville', label: 'Maplesville', },
            { value: 'Pinckard', label: 'Pinckard', },
            { value: 'Gilbertown', label: 'Gilbertown', },
            { value: 'Ariton', label: 'Ariton', },
            { value: 'Dodge City', label: 'Dodge City', },
            { value: 'Perdido', label: 'Perdido', },
            { value: 'White Plains', label: 'White Plains', },
            { value: 'Berlin', label: 'Berlin', },
            { value: 'Clayhatchee', label: 'Clayhatchee', },
            { value: 'McDonald Chapel', label: 'McDonald Chapel', },
            { value: 'Arley', label: 'Arley', },
            { value: 'Garden City', label: 'Garden City', },
            { value: 'Millry', label: 'Millry', },
            { value: 'Somerville', label: 'Somerville', },
            { value: 'Ivalee', label: 'Ivalee', },
            { value: 'Pennington', label: 'Pennington', },
            { value: 'Ider', label: 'Ider', },
            { value: 'White Hall', label: 'White Hall', },
            { value: 'River Falls', label: 'River Falls', },
            { value: 'Gurley', label: 'Gurley', },
            { value: 'Nances Creek', label: 'Nances Creek', },
            { value: 'Grimes', label: 'Grimes', },
            { value: 'Eva', label: 'Eva', },
            { value: 'North Courtland', label: 'North Courtland', },
            { value: 'Rock Mills', label: 'Rock Mills', },
            { value: 'Midway', label: 'Midway', },
            { value: 'Louisville', label: 'Louisville', },
            { value: 'Ranburne', label: 'Ranburne', },
            { value: 'West Jefferson', label: 'West Jefferson', },
            { value: 'Woodland', label: 'Woodland', },
            { value: 'Excel', label: 'Excel', },
            { value: 'Silas', label: 'Silas', },
            { value: 'Hytop', label: 'Hytop', },
            { value: 'Hackneyville', label: 'Hackneyville', },
            { value: 'Vina', label: 'Vina', },
            { value: 'St. Florian', label: 'St. Florian', },
            { value: 'Babbie', label: 'Babbie', },
            { value: 'Lisman', label: 'Lisman', },
            { value: 'Avon', label: 'Avon', },
            { value: 'Bristow Cove', label: 'Bristow Cove', },
            { value: 'Pleasant Groves', label: 'Pleasant Groves', },
            { value: 'Rutledge', label: 'Rutledge', },
            { value: 'West Point', label: 'West Point', },
            { value: 'Thomaston', label: 'Thomaston', },
            { value: 'Epes', label: 'Epes', },
            { value: 'Red Level', label: 'Red Level', },
            { value: 'Glen Allen', label: 'Glen Allen', },
            { value: 'McIntosh', label: 'McIntosh', },
            { value: 'Nectar', label: 'Nectar', },
            { value: 'Hatton', label: 'Hatton', },
            { value: 'Dozier', label: 'Dozier', },
            { value: 'Trafford', label: 'Trafford', },
            { value: 'Fulton', label: 'Fulton', },
            { value: 'Perdido Beach', label: 'Perdido Beach', },
            { value: 'South Vinemont', label: 'South Vinemont', },
            { value: 'Nixburg', label: 'Nixburg', },
            { value: 'Hurtsboro', label: 'Hurtsboro', },
            { value: 'Shiloh', label: 'Shiloh', },
            { value: 'Dutton', label: 'Dutton', },
            { value: 'St. Stephens', label: 'St. Stephens', },
            { value: 'Highland Lake', label: 'Highland Lake', },
            { value: 'Napier Field', label: 'Napier Field', },
            { value: 'Fruithurst', label: 'Fruithurst', },
            { value: 'Castleberry', label: 'Castleberry', },
            { value: 'Ray', label: 'Ray', },
            { value: 'Union', label: 'Union', },
            { value: 'Twin', label: 'Twin', },
            { value: 'Black', label: 'Black', },
            { value: 'Hammondville', label: 'Hammondville', },
            { value: 'Newville', label: 'Newville', },
            { value: 'Akron', label: 'Akron', },
            { value: 'Belk', label: 'Belk', },
            { value: 'Kennedy', label: 'Kennedy', },
            { value: 'Geiger', label: 'Geiger', },
            { value: 'Cuba', label: 'Cuba', },
            { value: 'Hodges', label: 'Hodges', },
            { value: 'Millerville', label: 'Millerville', },
            { value: 'Elkmont', label: 'Elkmont', },
            { value: 'Stockton', label: 'Stockton', },
            { value: 'Goshen', label: 'Goshen', },
            { value: 'East Point', label: 'East Point', },
            { value: 'Mentone', label: 'Mentone', },
            { value: 'Reeltown', label: 'Reeltown', },
            { value: 'Boykin', label: 'Boykin', },
            { value: 'Repton', label: 'Repton', },
            { value: 'Gordonville', label: 'Gordonville', },
            { value: 'Whatley', label: 'Whatley', },
            { value: 'Colony', label: 'Colony', },
            { value: 'Weogufka', label: 'Weogufka', },
            { value: 'Shorter', label: 'Shorter', },
            { value: 'Waldo', label: 'Waldo', },
            { value: 'Uriah', label: 'Uriah', },
            { value: 'Horn Hill', label: 'Horn Hill', },
            { value: 'Gaylesville', label: 'Gaylesville', },
            { value: 'Gordon', label: 'Gordon', },
            { value: 'Madrid', label: 'Madrid', },
            { value: 'Fredonia', label: 'Fredonia', },
            { value: 'Newbern', label: 'Newbern', },
            { value: 'Heath', label: 'Heath', },
            { value: 'Sipsey', label: 'Sipsey', },
            { value: 'Lockhart', label: 'Lockhart', },
            { value: 'Cullomburg', label: 'Cullomburg', },
            { value: 'Detroit', label: 'Detroit', },
            { value: 'Maytown', label: 'Maytown', },
            { value: 'Anderson', label: 'Anderson', },
            { value: 'Carolina', label: 'Carolina', },
            { value: 'Daviston', label: 'Daviston', },
            { value: 'Banks', label: 'Banks', },
            { value: 'County Line', label: 'County Line', },
            { value: 'Waverly', label: 'Waverly', },
            { value: 'Boligee', label: 'Boligee', },
            { value: 'Chunchula', label: 'Chunchula', },
            { value: 'Coffeeville', label: 'Coffeeville', },
            { value: 'Gainesville', label: 'Gainesville', },
            { value: 'Sanford', label: 'Sanford', },
            { value: 'Abanda', label: 'Abanda', },
            { value: 'Broomtown', label: 'Broomtown', },
            { value: 'Glenwood', label: 'Glenwood', },
            { value: 'Langston', label: 'Langston', },
            { value: 'Bakerhill', label: 'Bakerhill', },
            { value: 'Hissop', label: 'Hissop', },
            { value: 'Loachapoka', label: 'Loachapoka', },
            { value: 'Riverview', label: 'Riverview', },
            { value: 'Coffee Springs', label: 'Coffee Springs', },
            { value: 'Fruitdale', label: 'Fruitdale', },
            { value: 'Hobson', label: 'Hobson', },
            { value: 'Sweet Water', label: 'Sweet Water', },
            { value: 'Nauvoo', label: 'Nauvoo', },
            { value: 'Paint Rock', label: 'Paint Rock', },
            { value: 'Edwardsville', label: 'Edwardsville', },
            { value: 'Beatrice', label: 'Beatrice', },
            { value: 'Yellow Bluff', label: 'Yellow Bluff', },
            { value: 'Macedonia', label: 'Macedonia', },
            { value: 'Fairford', label: 'Fairford', },
            { value: 'Spring Garden', label: 'Spring Garden', },
            { value: 'Pine Apple', label: 'Pine Apple', },
            { value: 'Lester', label: 'Lester', },
            { value: 'Beaverton', label: 'Beaverton', },
            { value: 'Talladega Springs', label: 'Talladega Springs', },
            { value: 'North Johns', label: 'North Johns', },
            { value: 'Delta', label: 'Delta', },
            { value: 'Vinegar Bend', label: 'Vinegar Bend', },
            { value: 'Toxey', label: 'Toxey', },
            { value: 'Gu-Win', label: 'Gu-Win', },
            { value: 'Gantt', label: 'Gantt', },
            { value: 'Eldridge', label: 'Eldridge', },
            { value: 'Onycha', label: 'Onycha', },
            { value: 'Orrville', label: 'Orrville', },
            { value: 'Eunola', label: 'Eunola', },
            { value: 'Pollard', label: 'Pollard', },
            { value: 'Gulfcrest', label: 'Gulfcrest', },
            { value: 'Billingsley', label: 'Billingsley', },
            { value: 'Vredenburgh', label: 'Vredenburgh', },
            { value: 'Morrison Crossroads', label: 'Morrison Crossroads', },
            { value: 'Kellyton', label: 'Kellyton', },
            { value: 'Myrtlewood', label: 'Myrtlewood', },
            { value: 'Bellamy', label: 'Bellamy', },
            { value: 'Five Points', label: 'Five Points', },
            { value: 'Waterloo', label: 'Waterloo', },
            { value: 'Haleburg', label: 'Haleburg', },
            { value: 'Lowndesboro', label: 'Lowndesboro', },
            { value: 'Panola', label: 'Panola', },
            { value: 'Faunsdale', label: 'Faunsdale', },
            { value: 'Ethelsville', label: 'Ethelsville', },
            { value: 'Cusseta', label: 'Cusseta', },
            { value: 'Kansas', label: 'Kansas', },
            { value: 'Axis', label: 'Axis', },
            { value: 'Graham', label: 'Graham', },
            { value: 'Providence', label: 'Providence', },
            { value: 'Malcolm', label: 'Malcolm', },
            { value: 'Blue Springs', label: 'Blue Springs', },
            { value: 'Needham', label: 'Needham', },
            { value: 'Mooresville', label: 'Mooresville', },
            { value: 'Spruce Pine', label: 'Spruce Pine', },
            { value: 'Bon Air', label: 'Bon Air', },
            { value: 'Ridgeville', label: 'Ridgeville', },
            { value: 'Standing Rock', label: 'Standing Rock', },
            { value: 'Penton', label: 'Penton', },
            { value: 'Goldville', label: 'Goldville', },
            { value: 'Libertyville', label: 'Libertyville', },
            { value: 'Calvert', label: 'Calvert', },
            { value: 'Union Grove', label: 'Union Grove', },
            { value: 'Equality', label: 'Equality', },
            { value: 'Dayton', label: 'Dayton', },
            { value: 'Emelle', label: 'Emelle', },
            { value: 'Deer Park', label: 'Deer Park', },
            { value: 'Tibbie', label: 'Tibbie', },
            { value: 'Hanover', label: 'Hanover', },
            { value: 'Nanafalia', label: 'Nanafalia', },
            { value: 'Carlton', label: 'Carlton', },
            { value: 'Benton', label: 'Benton', },
            { value: 'Petrey', label: 'Petrey', },
            { value: 'Movico', label: 'Movico', },
            { value: 'Belgreen', label: 'Belgreen', },
            { value: 'Peterman', label: 'Peterman', },
            { value: 'Cardiff', label: 'Cardiff', },
            { value: 'Oak Hill', label: 'Oak Hill', },
            { value: 'Putnam', label: 'Putnam', },
            { value: 'McMullen', label: 'McMullen', },
            { value: 'Natural Bridge', label: 'Natural Bridge', },
            { value: 'Bucks', label: 'Bucks', },
            { value: 'Memphis', label: 'Memphis', },
            { value: 'Fitzpatrick', label: 'Fitzpatrick', },
            { value: 'Sims Chapel', label: 'Sims Chapel', },
            { value: 'Megargel', label: 'Megargel', },
            { value: 'Rockville', label: 'Rockville', },
            { value: 'Catherine', label: 'Catherine', },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const splitFormItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 18,
    }
};

const ProductBaseAll = (props) => {
    const { product_description,
        onEditorContentChange, initId, vendor, onFormClose } = props;

    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;
    const [fileLibraryList, setFileLibraryList] = useState([]);
    const [fileSelectedList, setSelectedList] = useState([]);
    const [attributeList, setAttributeSets] = useState([]);
    const [initCategoryItems, initCategories] = useState([]);
    const [selCategoryItems, setCategories] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [dataInitAttr, setInitAttr] = useState([]);
    const [dataSelAttr, setSelAttr] = useState([]);
    const [dataDefAttr, setDefAttr] = useState([]);
    const [imglocation, setImgLocation] = useState('');
    const [libClicked, setOnlibButtonClick] = useState({});
    const [libAttrImgClicked, setOnlibAttrImgButtonClick] = useState({});
    const [loading, setLoading] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        refreshFilelist();

    }, []);

    const refreshFilelist = () => {
        const fileListUrl = '/storage/list?category=';
        const categoryStr = 'product';

        setImgLocation(categoryStr);
        setOnlibButtonClick(false);
        setOnlibAttrImgButtonClick(false);
        setLoading(true);

        initProductOrigin();
        const getFileData = async () => {

            const response = await getApiData(fileListUrl, categoryStr);
            const data = await response;
            for (let i = 0; i < data.length; i++) {
                if (data[i] && data[i].createdAt) {
                    data[i].createdAt = new Date(data[i].createdAt).toISOString();

                }
            }
            setFileLibraryList(data);
        }
        getFileData();

    }

    const initProductOrigin = () => {
        const productOriginUrl = '/product/origin';
        const getOriginData = async () => {

            const response = await getApiData(productOriginUrl);
            const originData = await response;

            //init attributes
            const attrData = originData.attributes;
            const selFullAttrData = setAttrOptions(attrData);
            const selDefAttrOptions = setDefAttrOptions(attrData);

            setInitAttr(attrData);
            setSelAttr(selFullAttrData);
            setDefAttr(selDefAttrOptions);

            //init category tree:
            const initCategoryid = 22;
            const getInitCategories = async (initCategoryid) => {
                const catalogListUrl = '/catalog/';
                await getApiData(catalogListUrl, initCategoryid).then(data => {
                    if (data) {
                        let treeCate = [];
                        treeCate.push(data)
                        console.log('init categories:', treeCate);
                        initCategories(treeCate);

                        if (initId) {
                            initProductbyId(initId);
                        }
                    }
                });

            }
            getInitCategories(initCategoryid);


        }

        getOriginData();

    }

    const dateFormat = "YYYY/MM/DD";

    const initProductbyId = async (id) => {

        let productUrl = '/product/' + id;
        const response = await getApiData(productUrl);
        const data = await response;
        if (data) {
            console.log('product data byid:', data);
            if (data.categories) {
                setCategories(data.categories);
            }
            if (data.variant) {
                setDataSource(data.variant);
                console.log('set variant:', data.variant);
            }

            if (data.images) {
                setSelectedList(data.images);
                console.log('set selected images:', data.variant);
            }
            form.setFieldsValue({
                activate_product: data.activate === 1 ? true : false,
                product_name: data.name,
                product_categories: data.categories,
                product_type: data.type,
                product_sku: data.sku,
                //product_slug: data.url,
                product_URL: data.url,
                product_unit_price: data.unit_price,
                product_promote_price: data.promote_price,
                product_tax: data.tax,
                product_unit_stock: data.unit_stock,
                product_unit_cost: data.unit_cost,
                product_in_stock: data.in_stock === 1 ? true : false,
                product_weight: data.weight,
                product_intro: data.intro,
                product_description: data.description,
                product_promote_valid_range: [dayjs(data.promote_from_date, dateFormat), dayjs(data.promote_to_date, dateFormat)],
                //product_promote_valid_range: [moment(data.promote_from_date, dateFormat), moment(data.promote_to_date, dateFormat)],
            });
            setLoading(false);
        }
    }

    const onFileSelect = (item, key) => {

        setSelectedList(item);
        setOnlibButtonClick(false);
        let varibles = getImgVal(dataSource, key, item);
        console.log('genarete varibles:', varibles);
        setDataSource(varibles);
    }

    const onAttrImgSel = (item, key) => {

        let varibles = getImgVal(dataSource, key, item);
        console.log('genarete varibles:', varibles);
        setDataSource(varibles);
        setOnlibAttrImgButtonClick(false);
    }

    const onLibbuttonClick = (value) => {
        //once user click the lib button, we consider it as true;
        console.log('setOnlibButtonClick set:', value);
        setOnlibButtonClick(value);
    }

    const onLibAttrImgbuttonClick = (value) => {
        //once user click the lib button, we consider it as true;
        console.log('onLibAttrImgbuttonClick set:', value);
        setOnlibAttrImgButtonClick(value);
    }

    const suffixSelector = (
        <Form.Item name="product_currency" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
    const suffixWeightSelector = (
        <Form.Item name="product_weight_option" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="lbs">磅</Option>
                <Option value="kgs">公斤</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector1 = (
        <Form.Item name="product_currency" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector2 = (
        <Form.Item name="product_currency" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );

    const suffixTaxOption = (
        <Form.Item name="product_tax_option" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="p">%</Option>
                <Option value="c">Cost</Option>
            </Select>
        </Form.Item>
    );

    const [productType, setProductType] = useState('single');

    const onFormLayoutChange = ({ target: { value } }) => {
        console.log('switch product type:', value);
        setProductType(value);
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "code"],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "code",
    ];

    const rangeConfig = {
        // rules: [
        //     {
        //         type: 'array',
        //         required: true,
        //         message: 'Please select time!',
        //     },
        // ],
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setAttributeSets(value);
    };

    const handleProductNameChange = (value) => {

        let slug_val = slugify(value.target.value);
        form.setFieldsValue({ product_URL: `${slug_val}` });
    };

    const handleAdd = (value) => {

        let dataAttrbute = includeFilter(dataInitAttr, attributeList);
        console.log('add attributel', dataAttrbute);
        console.log('!libClicked?:', libClicked);

        let unitPrice = form.getFieldValue(['product_unit_price']) ? parseFloat(form.getFieldValue(['product_unit_price'])).toFixed(2) : parseInt(form.getFieldValue(['product_unit_price']));
        let unitPromoPrice = form.getFieldValue(['product_promote_price']) ? parseFloat(form.getFieldValue(['product_promote_price'])).toFixed(2) : parseInt(form.getFieldValue(['product_promote_price']));
        let unitQty = form.getFieldValue(['product_unit_stock']) ? parseFloat(form.getFieldValue(['product_unit_stock'])).toFixed(2) : parseInt(form.getFieldValue(['product_unit_stock']));
        let sku = form.getFieldValue(['product_sku']) ? form.getFieldValue(['product_sku']) : null;
        if (sku) {
            if (unitPrice && unitQty) {

                let imgSel = [];
                let varibles = generateVaribles(dataAttrbute, sku, unitPrice, unitPromoPrice, unitQty, imgSel);
                console.log('field data:', varibles);
                setDataSource(varibles);
            }
            else {
                alert('请先录入有效的价格与库存数量')
            }
        }
        else {
            alert('请确保当前SKU唯一标识')
        }
    }

    const onSubmit = (value) => {

        //add new product:product/save
        const productSaveUrl = '/product/save';

        let productVal = {
            id: initId ? initId : 0,
            product: value,
            images: fileSelectedList,
            variants: dataSource,
        }
        console.log('Received values of form: ', productVal);
        console.log('current libClicked:', libClicked);
        if (!libClicked && !libAttrImgClicked) {
            setLoading(true);
            const saveDatas = async () => {
                let res = await saveApiData(productSaveUrl, productVal);
                if (res) {
                    console.log('save tree response1:', res);
                    setLoading(false);
                }
            }
            saveDatas()
        }

    }

    const setTreeNodes = (value) => {
        setCategories(value);
    }

    const handleCopyCurrent = () => {
        const catalogSaveUrl = '/catalog/save';
        // const copyTree = [];
        // copyTree[0].id = 0;
        // copyTree[0].key = 123;

        // console.log('final copy tree:', copyTree);
        // const saveDatas = async () => {
        //     let res = await saveApiData(catalogSaveUrl, copyTree[0]);
        //     console.log('save tree response0:', res.key);
        //     if (res) {
        //         console.log('save tree response1:', JSON.stringify(res.id));
        //     }

        // }
        // saveDatas()
    }

    const { confirm } = Modal;
    const showConfirmModal = () => {
        confirm({
            title: '确定要更改当前产品信息么?',
            content:
                '点击OK将提交当前产品信息并更新产品详细信息。',
            async onOk() {
                try {
                    form.submit();
                } catch (e) {
                    return console.log('Oops errors!');
                }
            },
            onCancel() { },
        });
    };

    return (
        <Spin spinning={loading}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onSubmit}
                initialValues={{
                    product_type: 'single',
                    product_weight_option: 'kgs',
                    product_currency: 'USD',
                    product_tax_option: 'p',
                    activate_product: true,
                }}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 18,
                }}
                scrollToFirstError
            >
                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff", fontSize: "15px" }}>
                    <Media body >
                        <h6 className="mt-0 mb-2 header-title">产品类型</h6>
                        <hr></hr>
                        <div style={{ display: 'ruby-text' }}>
                            <div>
                                <Form.Item label="选择产品类型" name="product_type">
                                    <Radio.Group>
                                        <Radio.Button onChange={onFormLayoutChange} value='single'>独立产品</Radio.Button>
                                        <Radio.Button onChange={onFormLayoutChange} value="group">组合产品</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div style={{ float: 'right' }}>
                                <Button type="primary" className="mr-2 ml-2" onClick={handleCopyCurrent} htmlType="button">
                                    复制当前类目
                                </Button>
                                <Button className='mr-2 ml-2' onClick={onFormClose}>取消提交</Button>
                            </div>
                        </div>

                        <h6 className="mt-0 mb-2 header-title">产品信息的录入</h6>
                        <hr></hr>
                        <Form.Item name="product_activate" label="激活产品" valuePropName="checked" className="mt-0 mb-0 p-2">
                            <Switch />
                        </Form.Item>
                        <Form.Item
                            name="product_categories"
                            label="选择产品类目"
                            rules={[{ required: true, message: '请选择至少一个产品类目' }]}
                        >
                            <TreeSelect
                                treeData={initCategoryItems}
                                value={selCategoryItems}
                                treeCheckable={true}
                                treeCheckStrictly={true}
                                showCheckedStrategy={TreeSelect.SHOW_ALL}
                                placeholder="请选择类目"
                                onChange={val => setTreeNodes(val)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="product_name"
                            label="产品名称"
                            tooltip="当前的产品名称是什么?"
                            onChange={handleProductNameChange}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入产品名称',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="product_sku"
                            label="产品SKU"
                            disabled
                            tooltip="当前的产品SKU是什么?"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入产品SKU',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="product_URL"
                            label="产品Slug"
                            disabled
                            tooltip="当前的产品Slug是什么?"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入产品Slug',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item {...splitFormItemLayout}
                            name="product_unit_price"
                            label="产品单价"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入产品单价',
                                },
                            ]}
                        >
                            <InputNumber
                                addonAfter={suffixSelector}
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="product_promote_price"
                            label="产品优惠价格"
                        >
                            <InputNumber
                                addonAfter={suffixSelector1}
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item name="product_promote_valid_range" label="优惠时间范围" {...rangeConfig}>
                            <RangePicker />
                        </Form.Item>
                        <Form.Item
                            name="product_unit_cost"
                            label="产品成本"
                        >
                            <InputNumber
                                addonAfter={suffixSelector2}
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="product_tax"
                            label="产品税费"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入税费',
                                },
                            ]}
                        >
                            <InputNumber
                                addonAfter={suffixTaxOption}
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item name="product_unit_stock"
                            label="产品库存"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入产品库存',
                                },
                            ]}>
                            <InputNumber style={{
                                width: '25%',
                            }} />
                        </Form.Item>
                        <Form.Item
                            name="product_in_stock"
                            label="库存状况"
                            rules={[
                                {
                                    required: true,
                                    message: '请选择库存状况',
                                },
                            ]}
                        >
                            <Select placeholder="请选择库存状况">
                                <Option value={true}>有库存</Option>
                                <Option value={false}>无库存</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="product_weight"
                            label="产品重量"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入产品重量',
                                },
                            ]}
                        >
                            <InputNumber
                                addonAfter={suffixWeightSelector}
                                style={{
                                    width: '25%',
                                }}
                            />
                        </Form.Item>
                        <h6 className="mt-0 mb-2 header-title">产品详细资料的录入</h6>
                        <hr></hr>
                        <Form.Item
                            name="catalog_media_lib"
                            label="从图片库选择图片"
                        >
                            <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                只允许 *.png, *.jpg and *.jpeg 图片格式</p>
                            <MediaLib
                                onLibbuttonClick={onLibbuttonClick}
                                initId={initId}
                                vendor={vendor}
                                refreshMediaLib={refreshFilelist}
                                saveLocation={imglocation}
                                fileLibraryList={fileLibraryList}
                                fileSelectedList={fileSelectedList}
                                onFileSelect={onFileSelect}
                            ></MediaLib>
                        </Form.Item>

                        <Form.Item
                            name="product_intro"
                            label="产品介绍"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入产品介绍',
                                },
                            ]}
                        >
                            <Input.TextArea showCount maxLength={100} />
                        </Form.Item>
                        <Form.Item
                            style={{ minHeight: '230px' }}
                            name="product_description"
                            label="产品详细描述"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入系列详细描述',
                                },
                            ]}
                        >
                            <ReactQuill style={{ height: 200 }}
                                theme="snow"
                                value={product_description || ""}
                                modules={modules}
                                formats={formats}
                                onChange={onEditorContentChange}
                                placeholder={product_description}
                            />
                        </Form.Item>

                        <h6 className="mt-0 mb-2 header-title">产品属性变量</h6>
                        <hr></hr>
                        {productType === 'single'
                            ?
                            <React.Fragment>
                                <Row>
                                    <Col xl={6} className="text-right">
                                        <Select name='product_variation_options'
                                            mode="multiple"
                                            style={{
                                                width: '100%',
                                            }}
                                            placeholder="请选择属性"
                                            defaultValue={dataDefAttr}
                                            onChange={handleChange}
                                            optionLabelProp="label"
                                            options={dataSelAttr}
                                            optionRender={(options) => (
                                                <Space>

                                                    {options.data.desc}
                                                </Space>
                                            )}
                                        />
                                    </Col>
                                    <Col xl={2}>
                                        <Space align='right'>
                                            <Button
                                                onClick={handleAdd}
                                                type="primary"
                                                style={{
                                                    marginBottom: 16,
                                                }}
                                            >
                                                生成属性
                                            </Button>
                                        </Space>
                                    </Col>
                                    <Col xl={4} className="text-left">
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12} className="text-right">
                                        <ProductBaseAttributeForm
                                            setDataSource={setDataSource}
                                            dataSource={dataSource}
                                            initId={initId}
                                            vendor={vendor}
                                            refreshMediaLib={refreshFilelist}
                                            fileLibraryList={fileLibraryList}
                                            fileSelectedList={fileSelectedList}
                                            onFileSelect={onAttrImgSel}
                                            onLibbuttonClick={onLibAttrImgbuttonClick}
                                        ></ProductBaseAttributeForm>
                                    </Col>
                                </Row>
                            </React.Fragment>
                            : <CatalogProducts></CatalogProducts>
                        }


                        <Form.Item {...tailFormItemLayout}>
                            {/* <Button type="primary" className="mr-2" htmlType="submit">
                                提交信息
                            </Button> */}
                            <Button type="primary" onClick={showConfirmModal} className="mr-2">
                                提交信息
                            </Button>
                        </Form.Item>

                    </Media>
                </Media>
            </Form>
        </Spin>

    );
};

export default ProductBaseAll;