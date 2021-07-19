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
const initpage = {
    page: 1,
    size: 0,
    keyword: null,
    type: null,
    pageList: [],
    startPage: 1,
    endPage: 10,
    prev: false,
    next: true
}
const TableList = () => {

    const [members, setMembers] = useState(initState)
    console.log(11111, members)

    useEffect(() => {
        // axios.get("/data/members.json")
        axios.get("http://13.209.213.239:8000/member/list")
            .then(res => {
                setMembers(res.data.response.memberList)
                console.log(2222, res.data.response.memberList)
            })
    }, [])
// []<-밴 삭제 여부 클릭이벤트 상태 변경값 주기

    const list = members.map(member =>
    {console.log(777777777,member[0])
        return<tr key={member[0].email}>
            <td>{member[0].email}</td>
            <td>{member[0].name}</td>
            <td>{member[0].birth}</td>
            <td>{member[0].phone}</td>
            <td>{member[0].address} {member[0].detailAddress}</td>
            <td>{member[0].gender}</td>
            <td>{member[0].banned?"🔴":"🟢"}</td>
            <td>{member[0].removed?"삭제된계정":"정상계정"}</td>
            <td>{member[0].roleSet[member[0].roleSet.length-1]}</td>
            <td>{member[0].regDate}</td>
        </tr>})
    console.log(333333333, list)

    // const pageMaker = res
//
//     return (
//         <>
//         {list}
//         </>
//     );
// };


    // export default TableList;
//
//
// const th = ({member}) => {
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
                                    {list}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <div style={{textAlign:"center"}}>
                        <button>prev</button><button>next</button>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default TableList;


