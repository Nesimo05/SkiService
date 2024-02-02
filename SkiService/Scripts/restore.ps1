# restore.sh
# Navigieren Sie zu dem Verzeichnis, wo dieses Skript gespeichert ist.
cd "$(dirname "$0")"
# Stellen Sie die Datenbank 'SkiService' aus dem Backup wieder her.
mongorestore --db SkiService ./backup/SkiService
