db.createCollection('Mitarbeiter', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['Mitarbeitername', 'Position'],
            properties: {
                Mitarbeitername: {
                    bsonType: 'string',
                    description: 'Vollständiger Name des Mitarbeiters'
                },
                Position: {
                    bsonType: 'string',
                    description: 'Berufsbezeichnung des Mitarbeiters im Unternehmen'
                }
            }
        }
    }
});