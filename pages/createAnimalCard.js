import {Button, Form, Input, message, Modal} from "antd";

const CreateAnimalCard = ({animalCard, setAnimalCard, setAnimals}) => {

    const [form] = Form.useForm();

    const handleOk = () => {
        form.submit();
        setAnimalCard(false);
    };

    const handleCancel = () => {
        setAnimalCard(false);
    };

    const onFinish = async (values) => {
        fetch('/api/saveAnimalCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Successful response:', data);
                // Добавляем новую запись к текущему состоянию animals и обновляем состояние
                setAnimals([...animals, data]);
            })
            .catch((error) => console.error('Error: ', error))
    };

    return (
        <Modal open={animalCard} onOk={handleOk} onCancel={handleCancel} title={'Create Animal Card'}>
            <Form form={form} name={'createAnimalCard'} title={'Create Animal Card'} onFinish={onFinish}>
                <Form.Item id={'1'} name={'name'} label={'Кличка'}>
                    <Input/>
                </Form.Item>
                <Form.Item id={'2'} name={'age'} label={'Возраст'}>
                    <Input/>
                </Form.Item>
                <Form.Item id={'3'} name={'breed'} label={'Порода'}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default CreateAnimalCard;