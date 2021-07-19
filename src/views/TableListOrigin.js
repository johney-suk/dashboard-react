import React, {useEffect, useState} from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";

const initState = []
const TableList = () => {

  const [members, setMembers] = useState(initState)
  console.log(11111, members)

  useEffect(() => {

    // axios.get("/data/members.json")
    axios.get ("http://13.209.213.239:8000/member/list")
        .then(res => {
          setMembers(res.data.response.memberList)
          console.log(2222, res.data.response.memberList)
        })
  }, [])

  const list = members.map(member => <li key={member.email}>{member.email}</li>)
  console.log(333333333,list)


  export default TableList;

  return (

      {list}

  );
};
const MediaCard = ({movie}) => {
  return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">회원 리스트</Card.Title>
                  <p className="card-category">
                    회원정보
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                    <tr>
                      <th className="border-0">이메일</th>
                      <th className="border-0">이름</th>
                      <th className="border-0">생일</th>
                      <th className="border-0">전화번호</th>
                      <th className="border-0">주소</th>
                      <th className="border-0">성별</th>
                      <th className="border-0">밴 여부</th>
                      <th className="border-0">삭제 여부</th>
                      <th className="border-0">권한</th>
                      <th className="border-0">가입날짜</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>Oud-Turnhout</td>
                      <td>Oud-Turnhout</td>
                      <td>Oud-Turnhout</td>
                      <td>Oud-Turnhout</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            {/*<Col md="12">*/}
            {/*    <Card className="card-plain table-plain-bg">*/}
            {/*        <Card.Header>*/}
            {/*            <Card.Title as="h4">Table on Plain Background</Card.Title>*/}
            {/*            <p className="card-category">*/}
            {/*                Here is a subtitle for this table*/}
            {/*            </p>*/}
            {/*        </Card.Header>*/}
            {/*        <Card.Body className="table-full-width table-responsive px-0">*/}
            {/*            <Table className="table-hover">*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th className="border-0">ID</th>*/}
            {/*                    <th className="border-0">Name</th>*/}
            {/*                    <th className="border-0">Salary</th>*/}
            {/*                    <th className="border-0">Country</th>*/}
            {/*                    <th className="border-0">City</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}
            {/*                <tr>*/}
            {/*                    <td>1</td>*/}
            {/*                    <td>Dakota Rice</td>*/}
            {/*                    <td>$36,738</td>*/}
            {/*                    <td>Niger</td>*/}
            {/*                    <td>Oud-Turnhout</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <td>2</td>*/}
            {/*                    <td>Minerva Hooper</td>*/}
            {/*                    <td>$23,789</td>*/}
            {/*                    <td>Curaçao</td>*/}
            {/*                    <td>Sinaai-Waas</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <td>3</td>*/}
            {/*                    <td>Sage Rodriguez</td>*/}
            {/*                    <td>$56,142</td>*/}
            {/*                    <td>Netherlands</td>*/}
            {/*                    <td>Baileux</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <td>4</td>*/}
            {/*                    <td>Philip Chaney</td>*/}
            {/*                    <td>$38,735</td>*/}
            {/*                    <td>Korea, South</td>*/}
            {/*                    <td>Overland Park</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <td>5</td>*/}
            {/*                    <td>Doris Greene</td>*/}
            {/*                    <td>$63,542</td>*/}
            {/*                    <td>Malawi</td>*/}
            {/*                    <td>Feldkirchen in Kärnten</td>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <td>6</td>*/}
            {/*                    <td>Mason Porter</td>*/}
            {/*                    <td>$78,615</td>*/}
            {/*                    <td>Chile</td>*/}
            {/*                    <td>Gloucester</td>*/}
            {/*                </tr>*/}
            {/*                </tbody>*/}
            {/*            </Table>*/}
            {/*        </Card.Body>*/}
            {/*    </Card>*/}
            {/*</Col>*/}
          </Row>
        </Container>
      </>
  );
}

