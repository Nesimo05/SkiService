
db.createCollection('Status', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['StatusName', 'StatusWert'],
            properties: {
                StatusName: {
                    bsonType: 'string',
                    description: 'Bezeichnung des Status'
                },
                StatusWert: {
                    bsonType: 'string',
                    description: 'Wert oder Beschreibung des Status'
                }
            }
        }
    }
});