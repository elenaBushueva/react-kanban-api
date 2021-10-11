import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const EditDelete = (props) => {

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>...
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default EditDelete;