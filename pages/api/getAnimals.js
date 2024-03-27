import fs from 'fs';

export default (req, res) => {
    try {
        const fileContent = fs.readFileSync('public/animals.json');
        const arr = JSON.parse(fileContent);
        res.status(200).json(arr);
    } catch (error) {
        console.error('Ошибка при чтении данных о животных из файла:', error);
        res.status(500).json({ error: 'Failed to read animal data from file' });
    }
};
