import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import config from "./config";
import "./NewNote.css";

export default function NewNote() {
    const params = useParams()
    const id = params.id;
    const file = useRef(null);
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return content.length > 0;
    }

    function handleFileChange(event) {
        file.current = event.target.files[0];
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000
                } MB.`
            );
            return;
        }

        setIsLoading(true);
    }
    return (
        <div className="NewNote">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="content">
                    <Form.Control
                        value={content}
                        as="textarea"
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="file">
                    <Form.Label>Attachment</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        isLoading={isLoading}
                    >
                        Create
                    </Button>
                    <Button
                        onClick={goBack}
                        variant="primary"
                    >{`<`} Back</Button>
                </div>
            </Form>
        </div>
    );
}