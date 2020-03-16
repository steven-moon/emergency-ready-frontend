#!/bin/sh

# INSTALL s3cmd  (https://s3tools.org/s3cmd)
# find latest version at https://sourceforge.net/projects/s3tools/files/s3cmd/
# wget https://sourceforge.net/projects/s3tools/files/s3cmd/2.0.1/s3cmd-2.0.1.tar.gz
# tar xzf s3cmd-2.0.1.tar.gz
# cd s3cmd-2.0.2
# sudo python setup.py install

# run  's3cmd --configure'

# run 'crontab -e' and add cron jobs

# daily MySQL backup to S3 (not on first day of month or sundays)
# 0 3 2-31 * 1-6 sh /home/youruser/mysqltos3.sh day
# weekly MySQL backup to S3 (on sundays, but not the first day of the month)
# 0 3 2-31 * 0 sh /home/youruser/mysqltos3.sh week
# monthly MySQL backup to S3
# 0 3 1 * * sh /home/youruser/mysqltos3.sh month



# Updates etc at: https://github.com/woxxy/MySQL-backup-to-Amazon-S3
# Under a MIT license

# change these variables to what you need
MYSQLROOT=root
MYSQLPASS=
S3BUCKET=summa-coding-db-backups
FILENAME=summa-clever-server
DATABASE='--all-databases'
# the following line prefixes the backups with the defined directory. it must be blank or end with a /
S3PATH=mysql_backup/
# when running via cron, the PATHs MIGHT be different. If you have a custom/manual MYSQL install, you should set this manually like MYSQLDUMPPATH=/usr/local/mysql/bin/
MYSQLDUMPPATH=
#tmp path.
TMP_PATH=~/

DATESTAMP=$(date +".%m.%d.%Y")
DAY=$(date +"%d")
DAYOFWEEK=$(date +"%A")

PERIOD=${1-day}
if [ ${PERIOD} = "auto" ]; then
	if [ ${DAY} = "01" ]; then
        	PERIOD=month
	elif [ ${DAYOFWEEK} = "Sunday" ]; then
        	PERIOD=week
	else
       		PERIOD=day
	fi
fi

echo "Selected period: $PERIOD."

echo "Starting backing up the database to a file..."

# dump all databases
${MYSQLDUMPPATH}mysqldump --quick --user=${MYSQLROOT} --password=${MYSQLPASS} ${DATABASE} > ${TMP_PATH}${FILENAME}.sql

echo "Done backing up the database to a file."
echo "Starting compression..."

tar czf ${TMP_PATH}${FILENAME}${DATESTAMP}.tar.gz ${TMP_PATH}${FILENAME}.sql

echo "Done compressing the backup file."

# we want at least two backups, two months, two weeks, and two days
#echo "Removing old backup (2 ${PERIOD}s ago)..."
#s3cmd del --recursive s3://${S3BUCKET}/${S3PATH}previous_${PERIOD}/
#echo "Old backup removed."

#echo "Moving the backup from past $PERIOD to another folder..."
#s3cmd mv --recursive s3://${S3BUCKET}/${S3PATH}${PERIOD}/ s3://${S3BUCKET}/${S3PATH}previous_${PERIOD}/
#echo "Past backup moved."

# upload all databases
echo "Uploading the new backup..."
s3cmd put -f ${TMP_PATH}${FILENAME}${DATESTAMP}.tar.gz s3://${S3BUCKET}/${S3PATH}${PERIOD}/
echo "New backup uploaded."

echo "Removing the cache files..."
# remove databases dump
rm ${TMP_PATH}${FILENAME}.sql
rm ${TMP_PATH}${FILENAME}${DATESTAMP}.tar.gz
echo "Files removed."
echo "All done."
