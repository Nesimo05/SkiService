db.createCollection('Dienstleistung', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['DienstleistungsName'],
            properties: {
                DienstleistungsName: {
                    bsonType: 'string',
                    description: 'Name der angebotenen Dienstleistung'
                }
            }
        }
    }
});