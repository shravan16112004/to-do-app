// App.js File
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
    constructor(props) {
        super(props);

        // Load saved todos from browser localStorage
        const savedList = localStorage.getItem("todoList");

        this.state = {
            userInput: "",
            list: savedList ? JSON.parse(savedList) : [],
        };
    }

    // Save todo list to localStorage whenever state changes
    componentDidUpdate(prevProps, prevState) {
        if (prevState.list !== this.state.list) {
            localStorage.setItem("todoList", JSON.stringify(this.state.list));
        }
    }

    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input is not empty
    addItem() {
        if (this.state.userInput.trim() !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };

            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list,
                userInput: "",
            });
        }
    }

    // Delete item from list
    deleteItem(key) {
        const list = [...this.state.list];

        const updateList = list.filter((item) => item.id !== key);

        this.setState({
            list: updateList,
        });
    }

    // Edit item
    editItem = (index) => {
        const todos = [...this.state.list];
        const editedTodo = prompt("Edit the todo:");

        if (editedTodo !== null && editedTodo.trim() !== "") {
            todos[index].value = editedTodo;

            this.setState({
                list: todos,
            });
        }
    };

    render() {
        return (
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    10WeeksofCloudOps - TODO LIST
                </Row>

                <hr />

                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="add item . . . "
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />

                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => this.addItem()}
                                >
                                    ADD
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {this.state.list.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <ListGroup.Item
                                            variant="dark"
                                            action
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            {item.value}

                                            <span>
                                                <Button
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                    variant="light"
                                                    onClick={() =>
                                                        this.deleteItem(item.id)
                                                    }
                                                >
                                                    Delete
                                                </Button>

                                                <Button
                                                    variant="light"
                                                    onClick={() =>
                                                        this.editItem(index)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                            </span>
                                        </ListGroup.Item>
                                    </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
