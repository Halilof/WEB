import { insertAnimal } from './db';

export default function handler(req, res) {
    const data = req.body; // Ваши данные для сохранения
    
    let name = data.name;
    let age = data.age;
    let breed = data.breed;

    insertAnimal(name, age, breed)
        .then(() => {
            res.status(200).json({ message: 'Data saved successfully' });
        })
        .catch((error) => {
            console.error('Ошибка при сохранении данных:', error);
            res.status(500).json({ error: 'Failed to save data' });
        });
}
