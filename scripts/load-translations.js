require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const axios = require('axios');

const fetchTranslations = async (lng, uri) => {
    try {
        const response = await axios.get(`https://delivery.localazy.com${uri}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching translations for ${lng}: ${error.response.statusText}`);
    }
};

const saveTranslationsToFile = (lng, translations) => {
    const langFolderPath = path.join('src/app/i18n/locales', lng);
    if (!fs.existsSync(langFolderPath)) {
        fs.mkdirSync(langFolderPath, { recursive: true });
    }

    fs.writeFileSync(path.join(langFolderPath, 'translation.json'), JSON.stringify(translations, null, 2));
};

async function fetchAndExtractLanguages() {
    try {
        const URL = process.env.LOCALAZY_META_FILE_URL;
        const response = await axios.get(URL);
        const data = response.data;
        const fileKey = Object.keys(data.files)[0];
        const localesArray = data.files[fileKey].locales;

        const languagesAndUris = localesArray.map((locale) => ({
            language: locale.language,
            uri: locale.uri,
        }));

        return languagesAndUris;
    } catch (error) {
        console.error('An error occurred:', error);
        return [];
    }
}

const downloadTranslations = async () => {
    const languagesAndUris = await fetchAndExtractLanguages();
    for (const { language, uri } of languagesAndUris) {
        try {
            const translations = await fetchTranslations(language, uri);
            saveTranslationsToFile(language, translations);
        } catch (error) {
            console.error(`Failed to fetch or save translations for ${language}:`, error);
        }
    }
};

downloadTranslations();

