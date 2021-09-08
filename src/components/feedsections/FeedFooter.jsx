import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Dropdown, DropdownButton } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => <Footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-md-left">
        <div className="row">

            <hr className="clearfix w-100 d-md-none pb-0"/>

           
            <div className="col-md-12 mb-3">
            
            
            
                <ul className="list-unstyled mb-4">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Community Guidelines</a></li>
                    <li><a href="#!">Privacy and Terms</a></li>
                    <li><a href="#!">Sales Solutions</a></li>
                    <li><a href="#!">Safety Center</a></li>
                </ul>
            </div>
            
    
          
  
    <div className="col-md-12 footer-copyright text-left">
    <ul className="list-unstyled">
                    <li><a href="#!"><img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
                width="70"
                height="auto"
                className="d-inline-block align-top"
            />Linkedin Corporation © 2021</a></li>
                    </ul>
    </div>
    </div>
</div>
    

</Footer>

export default Footer