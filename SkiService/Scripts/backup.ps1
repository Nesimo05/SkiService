# backup.sh
# Navigieren Sie zu dem Verzeichnis, wo dieses Skript gespeichert ist.
    cd "$(dirname "$0")"
# Erstellen Sie ein Backup der Datenbank 'SkiService'.
    mongodump--db SkiService--out./ backup
