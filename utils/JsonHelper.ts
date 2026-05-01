import path from 'path';
import { TestDataRoot } from '../interface/ModuleTestData.interface';
import fs from 'fs';

export async function loadTestData() {
    //const environment = `${process.env.TEST_EXECUTION_ENV}` || 'qa';
    const directoryPath = path.join(__dirname,`../testdata`);

    const jsonData: TestDataRoot = {} as TestDataRoot;
    fs.readdirSync(directoryPath).forEach((file) => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(directoryPath, file);
            const fileContent: TestDataRoot = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            Object.assign(jsonData, fileContent);
        }
    });
    return jsonData;
}