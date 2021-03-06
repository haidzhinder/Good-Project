import React from "react";




// reactstrap components
import {

  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
const btnAdd={
 
  backgroundColor: "#0083ce"
}

class Course extends React.Component {
  constructor(){
    super();
    this.state = {
      CourseName: '',
      DepartmentName: ''
    }
  }

  onCourseNameChange = (event) => {
    this.setState({ CourseName: event.target.value });
  }
  onDepartmentNameChange = (event) => {
    this.setState({ DepartmentName: event.target.value });
  }

  onAddCourse = () => {
    fetch('http://localhost:3001/addCourse', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Course_Name: this.state.CourseName,
        Department_Name: this.state.DepartmentName
      })
    });
  }

  
  render(){
    return (
      <>
        <div className="content" style={{marginLeft:'300px', marginTop:'150px'}}>
          
         
            
           
              <Row>
                <Col sm="10" >
                  <Card className="card-user"  style={{backgroundColor:'ghostwhite'}}>
                    <CardHeader>
                      <CardTitle tag="h5">ADD COURSE</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="6">
                          <FormGroup>
                              <label>Course Name</label>
                              <Input
                                onChange={this.onCourseNameChange}
                                placeholder="Enter Course Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                         
                         
                        </Row>
                        <Row>
                       
                          
                          
                        </Row>
                        <Row>
                        <Col className="pr-1" md="6">
                           <FormGroup onChange={this.onDepartmentNameChange}>
                             <label>Department</label>
                              <select className="form-control">
                              <option>Select..</option>
                                <option>ICS</option>
                          
                              </select>
                             
                           </FormGroup>
                         </Col>

                        
                        </Row>


                       
                        <Row>
                          <div className="update ml-auto mr-auto" >
                          <Row>
                          <div className="update ml-auto mr-auto">
                          <Button
                              className="btn-round"
                              color="DANGER"
                              type="submit" >
                              CANCEL
                            </Button>
                         
                            <Button
                              onClick={this.onAddCourse}
                              className="btn-round"
                              color="primary"
                              type="submit"
                              style={btnAdd}
                              >
                              SAVE
                            </Button>
                          </div>
                        </Row>
                          </div>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            
            
         
      </div>
      
    </>
    );
  };
}

export default Course;