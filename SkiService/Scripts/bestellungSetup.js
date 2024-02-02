db.createCollection('Bestellung', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['Kundenname', 'EMail', 'Telefon', 'Priorität', 'DienstleistungsID', 'StatusID', 'Preis'],
            properties: {
                Kundenname: {
                    bsonType: 'string',
                    description: 'Name des Kunden, der die Bestellung aufgibt'
                },
                EMail: {
                    bsonType: 'string',
                    description: 'Kontakt-E-Mail-Adresse des Kunden'
                },
                Telefon: {
                    bsonType: 'string',
                    description: 'Telefonnummer des Kunden'
                },
                Priorität: {
                    bsonType: 'string',
                    description: 'Dringlichkeit der Bestellung'
                },
                DienstleistungsID: {
                    bsonType: 'int',
                    description: 'Referenz auf die angeforderte Dienstleistung'
                },
                StatusID: {
                    bsonType: 'int',
                    description: 'Aktueller Status der Bestellung'
                },
                Preis: {
                    bsonType: 'decimal',
                    description: 'Preis der Bestellung'
                }
            }
        }
    }
});
