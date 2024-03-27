import { Button, List, Typography, Space } from "antd";
import { useEffect, useState } from "react";
import CreateAnimalCard from "./createAnimalCard";
import styles from '../styles/Home.module.css' 

const { Text } = Typography;

const AnimalCardPage = () => {
    const [animalCardModal, setAnimalCardModal] = useState(false);
    const [animals, setAnimals] = useState([]);

    const onClick = () => {
        setAnimalCardModal(true);
    }

    useEffect(() => {
        fetchAnimals(); // Загружаем данные о животных при монтировании компонента
    }, []);

    useEffect(() => {
        const interval = setInterval(fetchAnimals, 5000); // Обновляем данные каждые 5 секунд
        return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }, []);

    const fetchAnimals = () => {
        fetch('/api/getAnimalsCards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети или сервера: ' + response.status);
            }
            return response.json(); // Преобразуем ответ в JSON
        })
        .then(data => {
            setAnimals(data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    };

    return (
        <>
            <Button onClick={onClick}>Create</Button>
            <CreateAnimalCard animalCard={animalCardModal} setAnimalCard={setAnimalCardModal} setAnimals={setAnimals}/>

            <List
                className={styles.container}
                bordered
                style={{ color: 'white' }}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={animals}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ID]</Typography.Text> <Text id="cardText">{item.id}</Text><br/>
                        <Typography.Text mark>[Name]</Typography.Text> {item.name}<br/>
                        <Typography.Text mark>[Age]</Typography.Text> {item.age}<br/>
                        <Typography.Text mark>[Breed]</Typography.Text> {item.breed}
                    </List.Item>
                )}
            />
        </>
    )
}

export default AnimalCardPage;
