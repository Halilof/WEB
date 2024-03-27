import { getAnimals } from './db';

export default async function handler(req, res) {
    try {
        let animals = await getAnimals();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(animals);
    } catch (error) {
        console.error('Ошибка при получении данных о животных:', error);
        res.status(500).json({ error: 'Failed to retrieve animal data' });
    }
}
