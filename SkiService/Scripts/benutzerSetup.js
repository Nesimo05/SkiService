const db = connect('mongodb://localhost:27017/SkiService');

db.createCollection('Benutzer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Benutzername', 'Passwort', 'Berechtigungsstufe'],
      properties: {
        Benutzername: {
          bsonType: 'string',
          description: 'Identifikationsname des Benutzers'
        },
        Passwort: {
          bsonType: 'string',
          description: 'Sicherheitsschlüssel für Benutzerkontenzugriff'
        },
        Berechtigungsstufe: {
          bsonType: 'int',
          description: 'Zugriffslevel des Benutzers im System'
        }
      }
    }
  }
});