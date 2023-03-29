import {Button, InputGroup, Table, Form} from "react-bootstrap";
import {useState} from "react";
import "./styte.css"


let words = [
    {
        id: 1,
        nameWord : "PUBG",
        statusWord: false
    },
    {
        id: 2,
        nameWord : "LOL",
        statusWord: false
    },
    {
        id: 3,
        nameWord : "Liên quân",
        statusWord: false
    },
    {
        id: 4,
        nameWord : "Đế chế",
        statusWord: false
    },
    {
        id: 5,
        nameWord : "Đột kích",
        statusWord: false
    },
    {
        id: 6,
        nameWord : "Đánh nhau",
        statusWord: true
    },
]

export default function TodoList() {
    const [data, setData] = useState(words);
    const [word, setWord] = useState({
        id: "",
        nameWord: "",
        statusWord: false
    })

    function changeInput(e) {
        setWord({...word, nameWord: e.target.value})
    }

    function newWord() {
        setData([...data, word])
    }

    const changeStatus = (index) => {
        data[index].statusWord = !data[index].statusWord;
        setData([...data])
    }

    function remove(id) {
        console.log(id)
        data.splice(id, 1)
        setData([...data])
    }

    return(
        <>
            <InputGroup>
                <Form.Control onChange={changeInput} aria-label="Dollar amount (with dot and two decimal places)" />
                <Button onClick={newWord} variant="success">Thêm mới</Button>
            </InputGroup>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th className="stt">#</th>
                    <th className="nameWord">Name</th>
                    <th >Action</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((item, index)=> (
                    <tr key={index}>
                        <td >{index + 1}</td>
                        {
                            !item.statusWord? (
                                <td className="nameWord">{item.nameWord}</td>
                            ):(
                                <td className="nameWord2">{item.nameWord}</td>

                            )
                        }

                        <td>
                            {
                                !item.statusWord? (
                                <Button variant="success" className="button-action" onClick={()=>changeStatus(index)}>Hoàn thành</Button>

                            ):(
                                <>
                                    <Button variant="danger" className="button-action" onClick={() => remove(index)}>Xóa</Button>
                                    <Button variant="success" className="button-action" onClick={()=>changeStatus(index)}>Quay lại</Button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}